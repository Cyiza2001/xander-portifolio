import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io5";
import { AiOutlineWhatsApp } from "react-icons/ai";

const Home = () => {
  const [text] = useTypewriter({
    words: ["Full-Stack Programmer"],
    loop: 0,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  return (
    <div className="relative flex bg-home h-screen bg-cover bg-center p-40 w-screen">
      <div className="absolute top-0 right-0 bottom-0 left-0 bg-white opacity-70 z-0"></div>
      <div className="z-10 flex flex-col">
        <div className="flex text-6xl font-bold pb-4">Tech Enthusiast</div>
        <div className="text-blue-700 text-2xl font-semibold">
          {text}
          <Cursor cursorColor="blue" />
        </div>
        <div className="flex space-x-4 mt-4 text-black-600 text-xl">
          <div>
            <a href="https://www.linkedin.com/in/alexandre-ndanyuzwe-cyiza-766644210/">
              <FaLinkedinIn />
            </a>
          </div>
          <div>
            <a href="https://x.com/CyizaNdanyuzwe">
              <FaTwitter />
            </a>
          </div>
          <div>
            <a href="https://github.com/Cyiza2001"></a>
            <IoLogoGithub />
          </div>
          <div>
            <a href="https://www.instagram.com/cyiza_the_great/">
              <IoLogoInstagram />
            </a>
          </div>
          <div>
            <a href="https://wa.me/+250785587274"></a>
            <AiOutlineWhatsApp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
