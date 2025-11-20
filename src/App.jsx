// src/App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../src/Components/Header";
import Footer from "./Components/Footer";

import Creation from "./Pages/Creation";
import Origin from "./Pages/Origin";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/Creation" element={<Creation />} />
        <Route path="/Origin" element={<Origin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
