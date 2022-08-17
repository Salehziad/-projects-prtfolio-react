import React from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'universal-cookie';
const cookies = new Cookies();
export default function Navbar({user, user1}) {
    const logout = () => {
        window.open("https://full-auth-project.herokuapp.com/auth/logout", "_self");
        // window.open("http://localhost:5000/auth/logout", "_self");
        cookies.remove('token')
    }
    return (
        <div className='navbar'>
            <span className='navbar-logo'>
                <Link to='/' className='link'>saleh app</Link>
            </span>
            {user1
                ? (

                    <ul className='list'>
                        <li className='list-group'>
                            <img src={user.photos[0].value} alt="" className="avatar"/>
                        </li>
                        <li className='list-group'>{user.displayName}</li>
                        <li className='list-group' onClick={logout}>Logout</li>
                    </ul>
                )
                : user
                    ? (
                        <ul className='list'>
                            <li className='list-group'>
                                <img src={user.photos} alt="" className="avatar"/>
                            </li>
                            <li className='list-group'>{user.displayName}</li>
                            <li className='list-group' onClick={logout}>Logout</li>
                        </ul>
                    )
                    : (
                        <Link className='link' to='/login'>Login</Link>
                    )
}
        </div>
    )
}
