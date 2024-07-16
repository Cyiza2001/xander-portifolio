
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Home = () => {
  const [text] = useTypewriter({
    words: ["Full-Stack Programmer"],
    loop: 0, // infinite
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  return (
    <div className="relative flex bg-home h-screen bg-cover bg-center p-40">
      <div className="absolute top-0 right-0 bottom-0 left-0 bg-white opacity-70 z-0"></div>
      <div className="z-10 flex flex-col">
        <div className="flex text-6xl font-bold pb-4">Tech Enthusiast</div>
        <div className="text-sky-800 text-2xl font-normal">
          {text}
          <Cursor cursorColor="blue" />
        </div>
        <div className="flex space-x-4 mt-4 social-media">
          <div>
            <a href="https://www.linkedin.com/in/alexandre-ndanyuzwe-cyiza-766644210/">
              <img
                className="w-5 h-5"
                src="/images/icons8-linkedin-logo-48.png"
                alt="LinkedIn"
              />
            </a>
          </div>
          <div>
            <a href="https://x.com/CyizaNdanyuzwe">
              <img
                className="w-5 h-5"
                src="/images/icons8-twitter-logo-48.png"
                alt="Twitter"
              />
            </a>
          </div>
          <div>
            <a href="https://github.com/Cyiza2001">
              <img
                className="w-5 h-5"
                src="/images/icons8-github-30.png"
                alt="Github"
              />
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/cyiza_the_great/">
              <img
                className="w-5 h-5"
                src="/images/icons8-instagram-logo-48.png"
                alt="Instagram"
              />
            </a>
          </div>
          <div>
            <a href="https://wa.me/+250785587274">
              <img
                className="w-5 h-5"
                src="/images/icons8-whatsapp-48.png"
                alt="WhatsApp"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
