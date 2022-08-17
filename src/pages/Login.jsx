import React from 'react';
import google from '../assest/google.png';
import facebook from '../assest/facebook.png';
import github from '../assest/github.png';
import {useState} from 'react';
import {Link, Navigate} from 'react-router-dom';
import useCookie from 'react-use-cookie';
export default function Login(props) {
    const [userToken,
        setUserToken] = useCookie('token', '0');
    const googleAuth = () => {
        window.open("https://full-auth-project.herokuapp.com/auth/google", "_self");
    }
    const githubAuth = () => {
        window.open("https://full-auth-project.herokuapp.com/auth/github", "_self");
    }
    const facebookbAuth = () => {
        window.open("https://full-auth-project.herokuapp.com/auth/facebook", "_self");
    }
    const [user,
        setUser] = useState('');
    const [username,
        setUsername] = useState('');
    const [trueEmail,
        setTrueEmail] = useState(true);
    const [password,
        setPassword] = useState('');
    const [truePassword,
        setTruePassword] = useState(true);
    const handleSubmit = event => {
        event.preventDefault();
        setTrueEmail(true);
        setTruePassword(true);
        let data = {
            displayname: username,
            password: password
        }
        handleSignIn(data);
    };
    async function handleSignIn(data) {
        let url = "https://full-auth-project.herokuapp.com/auth/signin";
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                "Authorization": "Basic " + btoa(username + ":" + password)
            },
            body: JSON.stringify(data)
        })
        let reponse = await response.json();
        setUserToken(reponse.token)
        setUser(reponse);
        window
            .location
            .reload(false);
    }

    return (
        <div className="login">
            <h1 className="title-login">Choose a Login Method</h1>
            <div className="wrapper">
                <div className="left">
                    <div className="login-button google" onClick={googleAuth}>
                        <img src={google} alt="" className="icon"/>
                        google
                    </div>
                    <div className="login-button facebook" onClick={facebookbAuth}>
                        <img src={facebook} alt="" className="icon"/>
                        facebook
                    </div>
                    <div className="login-button github" onClick={githubAuth}>
                        <img src={github} alt="" className="icon"/>
                        github
                    </div>
                </div>
                <div className="center">
                    <div className="line"/>
                    <div className="or">OR</div>
                </div>
                <div className="right">
                    <form onSubmit={handleSubmit} className="right">
                        <input
                            type="tex"
                            placeholder='username'
                            onChange={event => setUsername(event.target.value)}
                            value={username}
                            required={true}/>
                        <span>{trueEmail
                                ? ""
                                : "please enter a valid email"}</span>
                        <input
                            type="password"
                            placeholder='Password'
                            value={password}
                            onChange={event => setPassword(event.target.value)}
                            required={true}
                            autoComplete="on"/>
                        <button type='submit' className='submit-btn'>Sign in</button>
                    </form>
                    {user
                        ? <Navigate to='/'></Navigate>
                        : null}
                    <div className='sign-up-redirect'>
                        <p>
                            new user? sign up
                            <Link className='link-title' to='/sinUp'>here</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}