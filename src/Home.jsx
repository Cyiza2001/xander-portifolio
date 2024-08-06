import React, { forwardRef } from "react";
import { useState } from "react";
import NavBars from "./NavBars";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io5";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { MdMenu } from "react-icons/md";
import { ImCross } from "react-icons/im";
import ScrollUp from "./ScrollUp";

const media = [
  {
    ref: "https://www.linkedin.com/in/alexandre-ndanyuzwe-cyiza-766644210/",
    icon: <FaLinkedinIn />,
    id: "linkedIn",
  },
  { ref: "https://x.com/CyizaNdanyuzwe", icon: <FaTwitter />, id: "twitter" },
  { ref: "https://github.com/Cyiza2001", icon: <IoLogoGithub />, id: "github" },
  {
    ref: "https://www.instagram.com/cyiza_the_great/",
    icon: <IoLogoInstagram />,
    id: "IG",
  },
  {
    ref: "https://wa.me/+250785587274",
    icon: <AiOutlineWhatsApp />,
    id: "whatsapp",
  },
];

const Home = forwardRef((props, ref) => {
  const [text] = useTypewriter({
    words: ["Full-Stack Programmer"],
    loop: 0,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });
  const [hoveredId, setHoveredId] = useState(null);
  const [isNavBarVisible, setIsNavBarVisible] = useState(false);
  const toggleNavBar = () => setIsNavBarVisible(!isNavBarVisible);
  const menuStyles =
    "fixed right-6 top-3 text-3xl text-black z-30 sm:hidden cursor-pointer";
  const crossStyles =
    "fixed right-6 top-3 text-sm text-white z-30 flex items-center sm:hidden  justify-center bg-blue-700 rounded-full h-9 w-9 cursor-pointer";

  return (
    <div
      ref={ref}
      className=" relative flex bg-home h-screen bg-cover bg-center  sm:p-40 sm:justify-start sm:items-start sm:py-48 w-screen justify-center items-center "
    >
      <div
        className={isNavBarVisible ? crossStyles : menuStyles}
        onClick={toggleNavBar}
      >
        {isNavBarVisible ? <ImCross /> : <MdMenu />}
      </div>

      <div
        className={` absolute top-0 left-0 w-100 bottom-0   z-50 ${
          isNavBarVisible ? "block" : "hidden"
        }`}
        style={{ minHeight: "100vh", minWidth: "50vw" }}
      >
        <NavBars />
      </div>
      <div className="absolute top-0 right-0 bottom-0 left-0 bg-white opacity-70 z-0"></div>

      <div className="z-10 flex flex-col ">
        <div className="flex sm:text-6xl text-4xl font-bold pb-4">
          Tech Enthusiast
        </div>
        <div className="text-blue-700 sm:text-2xl text-xl font-semibold">
          {text}
          <Cursor cursorColor="blue" />
        </div>
        <div className="flex space-x-4 mt-4 text-black-600 text-2xl hover:text-blue-700 ">
          {media.map((el) => {
            return (
              <a
                href={el.ref}
                key={el.id}
                className={`${
                  hoveredId === el.id ? " text-blue-700" : "text-black"
                }`}
                onMouseEnter={() => setHoveredId(el.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {el.icon}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
});

export default Home;
