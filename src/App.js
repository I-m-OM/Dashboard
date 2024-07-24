import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Leetcode from "./Pages/Leetcode";
import Statslc from "./Pages/Leet/Statslc";
import Problemslc from "./Pages/Leet/Problemslc";
import Contestlc from "./Pages/Leet/Contestlc";
import Statscf from "./Pages/Code/Statscf";
import Problemscf from "./Pages/Code/Problemscf";
import Contestcf from "./Pages/Code/Contestcf";
import Codeforces from "./Pages/Codeforces";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Leetcode" element={<Leetcode />}>
          {/* <Route path="" element={<Statslc />} />
          <Route path="problems" element={<Problemslc />} />
          <Route path="contests" element={<Contestlc />} /> */}
        </Route>
        <Route path="/Codeforces" element={<Codeforces />}>
          {/* <Route path="" element={<Statscf />} />
          <Route path="problems" element={<Problemscf />} />
          <Route path="contests" element={<Contestcf />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
