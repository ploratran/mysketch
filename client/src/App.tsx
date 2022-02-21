import React, { useState, useMemo } from "react";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import { UserContext } from "./components/context/UserContext";

const App = () => {
  const [token, setToken] = useState<string>("");

  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="/home" element={<Home />}/>
      </Routes>
  )
};

export default App; 