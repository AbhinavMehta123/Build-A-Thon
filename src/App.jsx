import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import TechStack from "./pages/TechStack";
import Documentation from "./pages/Documentation";
import GetStarted from "./pages/GetStarted";
import Navbar from "./components/Navbar";
import Rules from "./pages/Rules"; 
import Footer from "./components/Footer";

const App = () => {
  return (
    <main>
      {/* Gradient image */}
      <img
        className="absolute top-0 right-0 opacity-60 -z-10"
        src="/gradient (2).png"
        alt="Gradient-image"
      />

      {/* Blur effect */}
      <div
        className="h-0 w-[40rem] absolute top-[20%]
        right-[-5%] shadow-[0_0_900px_20px_#e99b63] -rotate-[30deg]
        -z-10"
      ></div>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/techstack" element={<TechStack />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/getstarted" element={<GetStarted />} />
      </Routes>
      <Footer/>
    </main>
  );
};

export default App;
