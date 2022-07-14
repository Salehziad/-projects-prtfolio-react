import React from 'react'
import { Link } from 'react-router-dom'
// import img from '../assest/logo.png'
export default function Navbar({user,User}) {
  const logout=()=>{
    // window.open("http://localhost:5000/auth/logout","_self");
    // window.open("https://projects-prtfolio-server.herokuapp.com/auth/logout","_self");
    window.open("https://projects-prtfolio-server.herokuapp.com/auth/logout","_self");


    // var cookies = document.cookie.split(";");
    // // console.log(cookies);
    // for (var i = 0; i < cookies.length; i++) {
    //     var cookie = cookies[i];
    //     var eqPos = cookie.indexOf("=");
    //     var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    //     document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    // }
  }
  if(User)console.log(User)
  // console.log(":ssssssssssssssssssssss",User);
  return (
    <div className='navbar'>
        <span className='navbar-logo'>
          <Link to='/' className='link'>saleh app</Link>
        </span>
        {user?(

          <ul className='list'>
            <li className='list-group'>
            <img
              src={user.photos[0].value}
              alt=""
              className="avatar"
            />
            </li>
            <li className='list-group'>{user.displayName}</li>
            <li className='list-group' onClick={logout}>Logout</li>
          </ul>
          ):User?(
            <ul className='list'>
            <li className='list-group'>
            <img
              src={User.user.photos}
              alt=""
              className="avatar"
            />
            </li>
            <li className='list-group'>{User.user.username}</li>
            <li className='list-group' onClick={logout}>Logout</li>
          </ul>
          ) 
          :(<Link className='link' to='/login'>Login</Link>)
        }
    </div>
  )
}
