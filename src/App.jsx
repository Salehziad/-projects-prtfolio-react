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
const App=()=>{
  const [user, setUser] = useState(null);
  const [User,setUser1] = useState('');
  useEffect(() => {
    const getUser = () => {
      // http://localhost:5000/auth/login/success"
      fetch("https://projects-prtfolio-server.herokuapp.com/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          console.log(
            "ggggggggggggggggggggggggggggggg"
          );
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          console.log(
            "ggggggggggggggggggggggggggggggg"
          );
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(
            "ggggggggggggggggggggggggggggggg"
          );
          console.log(err);
        });
    };
    setUser1(User);
    getUser();
  },[]);
  // console.log("hhhhhhhhhhhhhhhhhhhhhhhh",isParentData)
  return <>
  <BrowserRouter>
  <Navbar user={user} User={User}/>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/login"   element={user ? <Navigate to="/" /> : <Login toChild={User} sendToParent={setUser1} />} />
    <Route path="/post/:id" element={user||User ? <Post/> : <Navigate to='/login'></Navigate>}/>
    <Route path="/sinUp" element={<SignUp/>}/>
    <Route path="/verify" element={<Verify/>}/>
  </Routes>
  </BrowserRouter>
  </>
};
export default App;