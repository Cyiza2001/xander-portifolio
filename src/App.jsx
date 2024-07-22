import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from './About';
// import Achievements from './Achievements';
// import Certificate from './Certificate';
// import Projects from './Projects';
// import Blogs from './Blogs';
// import Services from './Services';
// import Contacts from './Contacts';

import NavBars from "./NavBars";
import Achievements from "./Achievements";

export default function App() {
  return (
    <>
    <NavBars/>
     <div className="flex flex-col">
    <Home/>
    <About/>
    <Achievements/>

     </div>
    </>
    
     

  );
}
