import React from 'react'
import {useState} from 'react';
import {Link, Navigate} from 'react-router-dom';
export default function SignUp() {

    const [email,
        setEmail] = useState('');
    const [trueEmail,
        setTrueEmail] = useState(false);
    const [userEmail,
        setUserEmail] = useState(false);
    const [firstName,
        setFirstName] = useState('');
    const [password,
        setPassword] = useState('');
    const [password1,
        setPassword1] = useState('');
    const [passwordShown,
        setPasswordShown] = useState(false);
    const [truePassword,
        setTruePassword] = useState(true);
    const [signup,
        setSignup] = useState(false);

    const handleSubmit = event => {
        event.preventDefault();
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!email.match(regexEmail)) {
            setTrueEmail(false)
            return;
        } else if (password1 !== password) {
            setTruePassword(false);
            return;
        } else {
            setTrueEmail(true);
            setTruePassword(true);
            let data = {
                displayName: firstName,
                email: email,
                password: password
            }
            handleSignUp(data);
        }
    };
    async function handleSignUp(data) {
        try {

            let url = "https://full-auth-project.herokuapp.com/auth/signup";
            let response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })

            let userInfo = await response.json();
            console.log(userInfo);
            if (userInfo) {
                setSignup(true);
                setUserEmail(false);
            } else if (!userInfo) {}
        } catch (error) {
            setUserEmail(true);
            setSignup(false);
        }
    }

    return (
        <div className="login">
            <h1 className="title-login">Choose a Login Method</h1>
            <div className="wrapper">
                <div className="right">
                    <form onSubmit={handleSubmit} className="right">
                        <input
                            type="email"
                            placeholder='email'
                            onChange={event => setEmail(event.target.value)}
                            value={email}
                            required={true}/>
                        <input
                            type="text"
                            placeholder='Username'
                            onChange={event => setFirstName(event.target.value)}
                            value={firstName}
                            required={true}/>
                        <input
                            type={passwordShown
                            ? "text"
                            : "password"}
                            placeholder='Password'
                            value={password}
                            onChange={event => setPassword(event.target.value)}
                            required={true}
                            autoComplete="on"/>
                        <input
                            type={passwordShown
                            ? "text"
                            : "password"}
                            placeholder=' confirm Password'
                            value={password1}
                            onChange={event => setPassword1(event.target.value)}
                            required={true}
                            autoComplete="on"/>
                        <span>{truePassword
                                ? ""
                                : "pls check Password"}</span>
                        <button type='submit' className='submit-btn'>Sign up</button>
                        {signup
                            ? <Navigate to='/verify'></Navigate>
                            : null
}
                        {userEmail
                            ? <div>the email is already used</div>
                            : <div></div>
}
                    </form>
                    <div className='sign-up-redirect'>
                        <p>
                            have account? log in
                            <Link className='link-title' to='/login'>here</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}