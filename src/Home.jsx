import React from "react";

const Home = () => {
  useEffect(() => {
    const images = document.querySelectorAll(".social-media img");
    images.forEach((img) => {
      img.style.width= "20px"
      img.style.height= "20px"
    })
  }, [])
  
 
  return (
    <div className="relative flex bg-home h-screen bg-cover bg-center p-40 ">
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundColor: "white",
          opacity:0.7,
          zIndex: 0,
        }}
      ></div>
      <div className="z-10 flex-col ">
        <div className="flex text-6xl font-bold pb-4 ">Tech Enthusiast</div>
        <div className="text-sky-800 text-2xl font-normal
        social-media">
          Full-Stack Programmer
        </div>
        <div className="flex space-x-4 mt-4" style={{
          img
        }}>
          <div>
            <a href="https://www.linkedin.com/in/alexandre-ndanyuzwe-cyiza-766644210/">
              <img src="/images/icons8-linkedin-logo-48.png" alt="LinkedIn" />
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
