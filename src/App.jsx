import Navbar from "./components/Navbar";
import "./app.css"
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/Post";
import { useEffect } from "react";
import { useState } from "react";
import SignUp from "./pages/SignUp";
import Verify from "./pages/Verify";
import Dashboard from "./pages/Dashboard";
import Signinlogs from "./pages/Signinlogs";
import SignUpLogs from "./pages/SignUpLogs";
const App=()=>{
  const [user, setUser] = useState(null);
  console.log(user);
  const [User,setUser1] = useState('');
  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);
  // console.log("hhhhhhhhhhhhhhhhhhhhhhhh",User)
  return <>
  <BrowserRouter>
  <Navbar user={user} User={User}/>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/login"   element={user ? <Navigate to="/" /> : <Login toChild={User} sendToParent={setUser1} />} />
    <Route path="/post/:id" element={user||User ? <Post/> : <Navigate to='/login'></Navigate>}/>
    <Route path="/sinUp" element={<SignUp/>}/>
    <Route path="/verify" element={<Verify/>}/>
    <Route path="/dashboard" element={
      User?
      User.user.role==='admin'?<Dashboard/>:null
      :null
    }/>
    <Route path="/signin-logs" element={
      User?
      User.user.role==='admin'?<Signinlogs/>:null
      :null
    }/>
    <Route path="/signup-logs" element={
      User?
      User.user.role==='admin'?<SignUpLogs/>:null
      :null
    }/>
  </Routes>
  </BrowserRouter>
  </>
};
export default App;