import Navbar from "./components/Navbar";
import "./app.css"
import Login from "./pages/Login";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/Post";
import {useEffect} from "react";
import {useState} from "react";
import SignUp from "./pages/SignUp";
import Verify from "./pages/Verify";
import {getCookie} from 'react-use-cookie';
import jwt_decode from "jwt-decode";
const token = getCookie('token');
if (token) {
    var decoded = jwt_decode(token);
}
const App = () => {
    const [user,
        setUser] = useState(null);
    const [user1,
        setUser1] = useState(null);
    console.log(user);
    useEffect(() => {
        if (decoded) {
            setUser(decoded)
        }
        const getUser = () => {
            fetch("https://full-auth-project.herokuapp.com/auth/login/success", {
                method: "GET",
                credentials: "include",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Credentials": true
                }
            }).then((response) => {
                if (response.status === 200) 
                    return response.json();
                throw new Error("authentication has been failed!");
            }).then((resObject) => {
                console.log('resobjict', resObject);
                setUser(resObject.user);
                setUser1(resObject.user);
            }).catch((err) => {
                console.log(err);
            });
        };
        getUser();
    }, []);
    return <>
        <BrowserRouter>
            <Navbar user={user} user1={user1}/>
            <Routes>
                <Route path="/" element={< Home />}/>
                <Route
                    path="/login"
                    element={user
                    ? <Navigate to="/"/>
                    : <Login/>}/> {user
                    ? <Route
                            path="/post/:id"
                            element={user
                            ? <Post/>
                            : <Navigate to='/login'></Navigate>}/>
                    : null}
                <Route path="/sinUp" element={< SignUp />}/>
                <Route path="/verify" element={< Verify />}/>
            </Routes>
        </BrowserRouter>
    </>
};
export default App;