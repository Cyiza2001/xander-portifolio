import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from './About';
import NavBars from "./NavBars";
import Achievements from "./Achievements";
import Certificates from "./Certificates";
import Projects from "./Projects"
import Blogs from "./Blogs"
import Services from "./Services";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Footers from "./Footers";
import ScrollUp from "./ScrollUp";

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
    <Blogs/>
    <Services/>
    <Testimonials/>
    <Contact/>
    <Footers/>
    <ScrollUp/>


     </div>
    </>
    
     

  );
}
