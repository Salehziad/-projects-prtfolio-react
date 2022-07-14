import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { Navigate } from "react-router-dom";
export default function Verify() {
  const [code,setCode]=useState('');
  const [verify,setVerify]=useState(false);
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
    let url = "https://projects-prtfolio-server.herokuapp.com/auth/verify";
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
      console.log("userInfo", userInfo);
    } catch (error) {
     console.log(error); 
    }
}
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder='code'
        value={code}
        onChange={event => setCode(event.target.value)} 
        required={true}
        />
        <button type="submit" className='submit-btn'>Submit</button>
        {verify?<Navigate to='/login' state={user}></Navigate>:<div>the code is not correct</div>}
      </form>
    </div>
  )
}

