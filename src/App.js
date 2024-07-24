import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Leetcode from "./Pages/Leetcode";
import Codeforces from "./Pages/Codeforces";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Leetcode" element={<Leetcode />}></Route>
        <Route path="/Codeforces" element={<Codeforces />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
