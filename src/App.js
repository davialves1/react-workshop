import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import DockComponent from "./DockComponent";
import Home from "./Home";
import Chart from "./Chart";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:tabCount" element={<Home />} />
        <Route path="/dock" element={<DockComponent />} />
        <Route path="/chart" element={<Chart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
