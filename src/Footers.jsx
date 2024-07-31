import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io5";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FaRegCopyright } from "react-icons/fa";
import { useState } from "react";


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


const Footers = ()=>{
    const [hoveredId, setHoveredId] = useState(null);
    return(
        <section className="bg-gray-200 flex flex-col justify-center items-center gap-8 pt-3 pb-8 mt-14">
             <div className="flex space-x-4 mt-4 text-black-600 text-2xl hover:text-blue-700 ">
          {media.map((el) => {
            return (
              <a
                href={el.ref}
                key={el.id}
                className={`${
                    
                  hoveredId === el.id ? "bg-blue-500" : "bg-blue-700"
                } h-8 w-8 rounded-full flex justify-center items-center text-white text-sm`}
                onMouseEnter={() => setHoveredId(el.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {el.icon}
              </a>
            );
          })}
        </div>
          

          <div className="flex flex-row justify-center items-center gap-2 "><FaRegCopyright /> <span className="font-bold">Alexandre Cyiza Ndanyuzwe.</span> <p className="font-light">All Rights Reserved</p></div>

        </section>
    )
}

export default Footers;