import React from "react";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="/home" element={<Home />}/>
    </Routes>
  )
};
