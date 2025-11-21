// src/App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../src/Components/Header";
import Footer from "./Components/Footer";

import Creation from "./Pages/Creation";

import HomeContent from "./Pages/HomeContent";
import Origin from "./Pages/Origin";
import Edition from "./Pages/Edition";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomeContent />} />
        <Route path="/Creation" element={<Creation />} />
        <Route path="/Origin" element={<Origin />} />
        <Route path="/Edition" element={<Edition />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
