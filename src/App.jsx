
import React, { useRef } from "react";
import NavBars from "./NavBars";
import Home from "./Home";
import About from "./About";
import Achievements from "./Achievements";
import Certificates from "./Certificates";
import Projects from "./Projects";
import Blogs from "./Blogs";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Footers from "./Footers";
import ScrollUp from "./ScrollUp";

const ids = [
  "home", "about", "achievements", "certificates", "projects", "blogs", "services", "testimonials", "contact"
];
export default function App() {
  const refs = ids.reduce((acc, id) => {
    acc[id] = useRef(null);
    return acc;
  }, {});

 
  return (
    <>
    
      <NavBars refs={refs}/>
      <div>
      <Home ref={refs["home"]} refs={refs} />

        <About ref={refs["about"]} />
        <Achievements ref={refs["achievements"]} />
        <Certificates ref={refs["certificates"]} />
        <Projects ref={refs["projects"]} />
        <Blogs ref={refs["blogs"]} />
        <Services ref={refs["services"]} />
        <Testimonials ref={refs["testimonials"]} />
        <Contact ref={refs["contact"]} />
        <Footers />
        <ScrollUp />
      </div>
    </>
  );
}



