import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from './About';
import NavBars from "./NavBars";
import Achievements from "./Achievements";
import Certificates from "./Certificates";
import Projects from "./Projects"

export default function App() {
  return (
    <>
    <NavBars/>
     <div className="flex flex-col">
    <Home/>
    <About/>
    <Achievements/>
    <Certificates/>
    <Projects/>

     </div>
    </>
    
     

  );
}
