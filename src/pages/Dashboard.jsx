import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Signinlogs from './Signinlogs';

export default function Dashboard() {
    const navigate=useNavigate();
    // handle signin logs
    const [signInUsers,setSignInUsers]=useState(null)
    async function handleSignInUsers() {
        // e.preventDefault();
      let url = "http://localhost:5000/admin/signInUsers";
      // let url ='https://projects-prtfolio-server.herokuapp.com';
      let response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
          },
      })
      
      let logss = await response.json();
      if(logss) setSignInUsers(logss);
    }
    const navigateLogInUsers=()=>{
        handleSignInUsers()
        if(signInUsers===null){
          return null
        }else{
          navigate('/signin-logs',{ state: {log:signInUsers} })

        }
    }
    // handle sign up logs
    const [signUpUsers,setSignUpUsers]=useState(null)
    async function handleSignUpUsers() {
      let url = "http://localhost:5000/admin/signupUsers";
      // let url ='https://projects-prtfolio-server.herokuapp.com';
      let response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
          },
      })
      
      let logss = await response.json();
      console.log(logss)
      if(logss) setSignUpUsers(logss);
    }
    const history=useNavigate();
    const navigateSignUpUsers=()=>{
      handleSignUpUsers()
      if(signUpUsers===null){
        return null
      }else{
        history('/signup-logs', {state: signUpUsers});
        // navigate('/signin-logs',{ state: {log:signUpUsers} })

      }
  }
  return (
    <div className="dashboard">
      {/* <Signinlogs log={signInUsers}/> */}
      <button onClick={navigateLogInUsers}>sign in users</button>
      <button onClick={navigateSignUpUsers}>sign up users</button>
      {/* <Link to="/signup-logs"className="link" data={"ddd"}>Sign up</Link> */}
    </div>
  )
}
