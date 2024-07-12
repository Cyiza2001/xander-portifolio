import React from "react";

const Home = () => {
  return (
    <div className="flex bg-home h-screen bg-cover bg-center p-40 opacity-40">
      <div className="flex-col ">
        <div className = "flex text-6xl font-bold pb-4 ">Tech Enthusiast</div>
        <div className="text-sky-800 text-2xl font-thin">Full-Stack Programmer</div>
        <div className="flex space-x-4 mt-4">
          <div>
            <a href="https://www.linkedin.com/in/alexandre-ndanyuzwe-cyiza-766644210/">
              <img
                src="/images/icons8-linkedin-logo-48.png"
                alt="LinkedIn"
              />
            </a>
          </div>
          <div>
            <a href="https://x.com/CyizaNdanyuzwe">
              <img src="/images/icons8-twitter-logo-48.png" alt="twitter" />
            </a>
          </div>
          <div>
            <a href="https://github.com/Cyiza2001">
              <img src="/images/icons8-github-30.png" alt="Github" />
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/cyiza_the_great/">
              <img src="/images/icons8-instagram-logo-48.png" alt="instagram" />
            </a>
          </div>
          <div>
            <a href="https://wa.me/+250785587274">
              <img src="/images/icons8-whatsapp-48.png" alt="whatsapp logo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
