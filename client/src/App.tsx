import React, { useState, useMemo, useContext } from "react";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import { UserContext } from "./components/context/UserContext";

const App = () => {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });
  const value = useMemo(() => ({ userData, setUserData }), [userData, setUserData]); 

  return (
    // @ts-ignore
    <UserContext.Provider value={value}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="/home" element={<Home />}/>
      </Routes>
    </UserContext.Provider>
  )
};

export default App; 