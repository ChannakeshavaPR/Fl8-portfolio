import React from "react";
import Home from "./Routes/Home";
import Projects from "./Routes/Project";
import Contact from "./Routes/Contact";
import Faq from "./Routes/Faq";
import About from "./Routes/About";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Faq" element={<Faq />} />
      </Routes>
    </>
  );
}

export default App;
