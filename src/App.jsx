// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./Home";
// import About from './About';
// import NavBars from "./NavBars";
// import Achievements from "./Achievements";
// import Certificates from "./Certificates";
// import Projects from "./Projects"
// import Blogs from "./Blogs"
// import Services from "./Services";
// import Testimonials from "./Testimonials";
// import Contact from "./Contact";
// import Footers from "./Footers";
// import ScrollUp from "./ScrollUp";
// const ids = ["home", "about","achievements", "certificates","projects","blogs","services","testimonials","contact"]

// export default function App() {
//   return (
//     <>
//     <NavBars/>
//     { ids.map((id) =>{ return(
//      <div className="flex flex-col">
//     <Home id={id}/>
//     <About id={id}/>
//     <Achievements id={id}/>
//     <Certificates id={id}/>
//     <Projects id={id}/>
//     <Blogs id={id}/>
//     <Services id={id}/>
//     <Testimonials id={id}/>
//     <Contact id={id}/>
//     <Footers/>
//     <ScrollUp/>


//      </div>
//     )})
//      }


//     </>
    
     

//   );
// }


import React, { useRef } from 'react';
import Home from './Home';
import About from './About';
import Achievements from './Achievements';
import Certificates from './Certificates';
import Projects from './Projects';
import Blogs from './Blogs';
import Services from './Services';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footers from './Footers';
import ScrollUp from './ScrollUp';
import NavBars from './NavBars';

const ids = [
  'home', 'about', 'achievements', 'certificates',
  'projects', 'blogs', 'services', 'testimonials', 'contact'
];

export default function App() {
  const refs = ids.reduce((acc, id) => {
    acc[id] = useRef(null);
    return acc;
  }, {});

  return (
    <>
      <NavBars refs={refs} />
      {ids.map((id) => (
        <div key={id} className="flex flex-col">
          <Home ref={refs[id]} id={id} />
          <About ref={refs[id]} id={id} />
          <Achievements ref={refs[id]} id={id} />
          <Certificates ref={refs[id]} id={id} />
          <Projects ref={refs[id]} id={id} />
          <Blogs ref={refs[id]} id={id} />
          <Services ref={refs[id]} id={id} />
          <Testimonials ref={refs[id]} id={id} />
          <Contact ref={refs[id]} id={id} />
          <Footers />
          <ScrollUp />
        </div>
      ))}
    </>
  );
}


