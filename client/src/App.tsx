import React, { useState } from "react";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import UserContext from "./components/context/UserContext";

export default function App() {
  const [userData, setUserData] = useState<Object>({
    token: "", 
    user: ""
  });

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="/home" element={<Home />}/>
      </Routes>
    </UserContext.Provider>
  )
};
