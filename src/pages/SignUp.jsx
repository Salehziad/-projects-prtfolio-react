
import React from 'react'
// import google from'../assest/google.png'
// import facebook from'../assest/facebook.png'
// import github from'../assest/github.png'
import {useState} from 'react';
import { Link, Navigate } from 'react-router-dom';
export default function SignUp() {

    const [email,setEmail]=useState('');
    const [trueEmail,setTrueEmail]=useState(false);
    const [userEmail,setUserEmail]=useState(false);
    const [firstName, setFirstName] = useState('');
    const [password, setPassword] = useState('');
    const [password1, setPassword1] = useState('');
    const [passwordShown, setPasswordShown] = useState(false);
    const [truePassword, setTruePassword] = useState(true);
    const [signup, setSignup] = useState(false);
    const handleSubmit = event => {
    // console.log('handleSubmit ran');
    event.preventDefault(); // 👈️ prevent page refresh

    //access input values here
    // check for email
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(regexEmail)) {
        // console.log("hhhh");
        setTrueEmail(false)
        return;
    }
    //check for passwords
    else if (password1 !== password) {
        setTruePassword(false);
        // setPassword('');
        // setPassword1('');
        return;
    }
    else{

        // clear all input values in the form
        setTrueEmail(true);
        setTruePassword(true);
        // setEmail('');
        // setFirstName('');
        // setPassword('');
        let data={
            displayName:firstName,
            email:email,
            password:password
        }
        // console.log(data);
        handleAddFav(data);
    }
  };
  async function handleAddFav(data) {
    // console.log('ssss',data);
    // e.preventDefault();
    try {
        
        let url = "https://projects-prtfolio-server.herokuapp.com/auth/signup";
        let response = await fetch(url, {
            method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
    body: JSON.stringify(data),
  })
  
  let userInfo = await response.json();
//   console.log(userInfo);
  if (userInfo) {
      setSignup(true);
      setUserEmail(false);
    //   console.log("ggg");
    }else if(!userInfo){
        // console.log("hhhhhhhhhhhhhhhhhhhhhhhh");
    }
    // console.log("userInfo", userInfo);
}
catch (error) {
       setUserEmail(true);
       setSignup(false);
    //    console.log("g");
       console.log(error);
   }
}


  return (
    <div className="login">
        <h1 className="title-login">Choose a Login Method</h1>
        <div className="wrapper">
            <div className="right">
                <form  onSubmit={handleSubmit} className="right">
                <input 
                    type="email"
                    placeholder='email'
                    onChange={event => setEmail(event.target.value)} 
                    value={email}
                    required={true}
                />
                <input 
                    type="text"
                    placeholder='Username'
                    onChange={event => setFirstName(event.target.value)} 
                    value={firstName}
                    required={true}
                    />
                <input 
                    type={passwordShown?"text":"password"}
                    placeholder='Password'
                    value={password}  onChange={event => setPassword(event.target.value)}
                    required={true}
                    />
                    <input 
                    type={passwordShown?"text":"password"}
                    placeholder=' confirm Password'
                    value={password1}  onChange={event => setPassword1(event.target.value)}
                    required={true}
                    />
                    <span>{truePassword?"":"pls check Password"}</span>
                    <button type='submit' className='submit-btn'>Sign up</button>
                    {
                        signup?<Navigate to='/verify'></Navigate>:null  
                    }
                    {
                        userEmail?<div>the email is already used</div>:<div></div>
                    }
                </form>
                <div className='sign-up-redirect'>
                    <p> have account? log in <Link className='link-title' to='/login'>here</Link></p>
                </div>
            </div>
        </div>
    </div>
  )
}