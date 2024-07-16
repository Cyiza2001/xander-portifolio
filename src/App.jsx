import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
// import About from './About';
// import Achievements from './Achievements';
// import Certificate from './Certificate';
// import Projects from './Projects';
// import Blogs from './Blogs';
// import Services from './Services';
// import Contacts from './Contacts';
// import NavBar from './NavBar';

export default function App() {
  return (
    <Router>
      <div className="flex">
        {/* <NavBar /> */}
        <Routes>
          <Route path="/" element={<Home/>} />
          {/* <Route path="/about" component={About} />
          <Route path="/achievements" component={Achievements} />
          <Route path="/certificate" component={Certificate} />
          <Route path="/projects" component={Projects} />
          <Route path="/blogs" component={Blogs} />
          <Route path="/services" component={Services} />
          <Route path="/contacts" component={Contacts} /> */}
        </Routes>
      </div>
    </Router>
  );
}
