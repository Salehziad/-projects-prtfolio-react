import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { Navigate } from "react-router-dom";
export default function Verify() {
  const [code,setCode]=useState('');
  const [verify,setVerify]=useState();
  const [user,setUser]=useState(''); 
  const handleSubmit=event=>{
    event.preventDefault();
    console.log("done");
    console.log(code);
    let data={
      code:code,
    }
    handleAddFav(data);
    setCode('');
  }
  async function handleAddFav(data) {
    console.log('ssss',data);
    // e.preventDefault();
    let url = "http://localhost:5000/auth/verify";
    try {
      
      let response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
      })
      
      let userInfo = await response.json();
      // if (userInfo) setSignup(true);
      setUser(userInfo); 
      setVerify(true);
      // console.log("userInfo", userInfo);
    } catch (error) {
      setVerify(false)
     console.log(error); 
    }
}
  return (
    <div className="verify">
      <form onSubmit={handleSubmit} className="verify-wrapper" >
      <label className="verify-title">Please Check your email and<br/>  enter the code here</label>
      <input 
        type="text"
        placeholder='code'
        value={code}
        onChange={event => setCode(event.target.value)} 
        required={true}
        />
        <button type="submit" className='submit-btn'>Submit</button>
        {verify?<Navigate to='/login' state={user}></Navigate>:verify===false?<div>the code is not correct</div>:null}
      </form>
    </div>
  )
}

