// import React from "react";
// import { useEffect } from "react";
// const Home = () => {
//   useEffect(() => {
//     const images = document.querySelectorAll(".social-media img");
//     images.forEach((img) => {
//       img.style.width= "20px"
//       img.style.height= "20px"
//     })
//   }, [])

 
//   return (
//     <div className="relative flex bg-home h-screen bg-cover bg-center pt-40 pl-40  ">
//       <div
//         style={{
//           position: "absolute",
//           top: 0,
//           right: 0,
//           bottom: 0,
//           left: 0,
//           backgroundColor: "white",
//           opacity:0.7,
//           zIndex: 0,
//         }}
//       ></div>
//       <div className="z-10 flex-col p">
//         <div className="flex text-6xl font-bold pb-4 ">Tech Enthusiast</div>
//         <div className="text-sky-800 text-2xl font-normal
//         ">
//           Full-Stack Programmer
//         </div>
//         <div className="flex space-x-6 mt-4 social-media">
//           <div>
//             <a href="https://www.linkedin.com/in/alexandre-ndanyuzwe-cyiza-766644210/">
//               <img src="/images/icons8-linkedin-logo-48.png" alt="LinkedIn" />
//             </a>
//           </div>
//           <div>
//             <a href="https://x.com/CyizaNdanyuzwe">
//               <img src="/images/icons8-twitter-logo-48.png" alt="twitter" />
//             </a>
//           </div>
//           <div>
//             <a href="https://github.com/Cyiza2001">
//               <img src="/images/icons8-github-30.png" alt="Github" />
//             </a>
//           </div>
//           <div>
//             <a href="https://www.instagram.com/cyiza_the_great/">
//               <img src="/images/icons8-instagram-logo-48.png" alt="instagram" />
//             </a>
//           </div>
//           <div>
//             <a href="https://wa.me/+250785587274">
//               <img src="/images/icons8-whatsapp-48.png" alt="whatsapp logo" />
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
import React, { useState, useEffect, useRef } from "react";

const Home = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const textRef = useRef(null);
  

  useEffect(() => {
    let timer;
    const fullText = textRef.current.innerText;

    const handleTyping = () => {
      setText((prev) =>
        isDeleting ? fullText.substring(0, prev.length - 1) : fullText.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
      }

      setTypingSpeed(isDeleting ? 50 : 150);
    };

    timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, typingSpeed]);

  useEffect(() => {
    // Select all images within the social-media div
    const images = document.querySelectorAll(".social-media img");

    // Apply styles to each image
    images.forEach((img) => {
      img.style.width = "48px";
      img.style.height = "48px";
    });
  }, []);

  return (
    <div className="relative flex bg-home h-screen bg-cover bg-center p-40">
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundColor: "white",
          opacity: 0.7,
          zIndex: 0,
        }}
      ></div>
      <div className="z-10 flex-col">
        <div className="flex text-6xl font-bold pb-4">Tech Enthusiast</div>
        <div className="text-sky-800 text-2xl font-normal" ref={textRef}>
          Full-Stack Programmer bosco
        </div>
        <div className="text-sky-800 text-2xl font-normal">{text}</div>
        <div className="flex space-x-4 mt-4 social-media">
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

