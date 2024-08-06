
// import React from 'react';
// import { useState } from "react";
// import { TiHomeOutline } from "react-icons/ti";
// import { LuUser2 } from "react-icons/lu";
// import { TbRosette } from "react-icons/tb";
// import { LiaCertificateSolid } from "react-icons/lia";
// import { AiOutlineProject } from "react-icons/ai";
// import { TbLogs } from "react-icons/tb";
// import { GrServices } from "react-icons/gr";
// import { FaRegEnvelope } from "react-icons/fa6";


// const data = [
//   { name: "Home", icon: <TiHomeOutline />, id: "Home" },
//   { name: "About", icon: <LuUser2 />, id: "About" },
//   { name: "Achievements", icon: <TbRosette />, id: "Achievements" },
//   { name: "Certificates", icon: <LiaCertificateSolid />, id: "Certificates" },
//   { name: "Projects", icon: <AiOutlineProject />, id: "Projects" },
//   { name: "Blogs", icon: <TbLogs />, id: "Blogs" },
//   { name: "Services", icon: <GrServices />, id: "Services" },
//   { name: "Contact", icon: <FaRegEnvelope />, id: "Contact" },
// ];

// const NavBars = () => {
//   const [hoveredId, setHoveredId] = useState(null);

//   return (
//     <nav className="fixed bg-transparent z-50 top-10 bottom-10 left-4 ">
//       <ul className="sm:flex flex-col hidden gap-3 justify-between max-h-[77%]">
//         {data.map((el) => (
//           <li
//             key={el.id}
//             className={`p-4 min-h-12 min-w-12 bg-gray-200  rounded-full duration-300 ease-in-out w-fit flex gap-2 justify-center items-center ${
//               hoveredId === el.id
//                 ? "hover:px-3 hover:text-white hover:font-bold hover:cursor-pointer hover:bg-blue-700"
//                 : ""
//             }`}
//             onMouseEnter={() => setHoveredId(el.id)}
//             onMouseLeave={() => setHoveredId(null)}
          
//           >
//             {el.icon}
//             <span
//               className={
//                 hoveredId === el.id
//                   ? "block transition ease-in-out text-white font-bold"
//                   : "hidden ease-in-out duration-200"
//               }
//             >
//               {el.name}
//             </span>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// export default NavBars;


// const NavBars = ({ refs }) => {
//   const [hoveredId, setHoveredId] = useState(null);
//   const handleScroll = () => {
//     const scrollPosition = window.scrollY + window.innerHeight / 2;

//     Object.keys(refs).forEach(id => {
//       const section = refs[id].current;
//       console.log(section, "narimpfuye mwa");
//       if (section) {
//         const { offsetTop, offsetHeight } = section;
//         if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
//           // Handle active state
//           console.log(`${id} is active,`);
          
//         }
//       }
//     });
//   };

//   React.useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <nav className="fixed bg-transparent z-50 top-10 bottom-10 left-4 ">
//            <ul className="sm:flex flex-col hidden gap-3 justify-between max-h-[77%]">
//              {data.map((el) => (
//               <li
//                 key={el.id}
//                 className={`p-4 min-h-12 min-w-12 bg-gray-200  rounded-full duration-300 ease-in-out w-fit flex gap-2 justify-center items-center ${
//                   hoveredId === el.id
//                     ? "hover:px-3 hover:text-white hover:font-bold hover:cursor-pointer hover:bg-blue-700"
//                     : ""
//                 }`}
//                 onMouseEnter={() => setHoveredId(el.id)}
//                 onMouseLeave={() => setHoveredId(null)}
              
//               >
//                 {el.icon}
//                 <span
//                   className={
//                     hoveredId === el.id
//                       ? "block transition ease-in-out text-white font-bold"
//                       : "hidden ease-in-out duration-200"
//                   }
//                 >
//                   {el.name}
//                 </span>
//               </li>
//             ))}
//           </ul>
//         </nav>
//   );
// };

// export default NavBars;


import { useState, useEffect } from "react";
import { TiHomeOutline } from "react-icons/ti";
import { LuUser2 } from "react-icons/lu";
import { TbRosette } from "react-icons/tb";
import { LiaCertificateSolid } from "react-icons/lia";
import { AiOutlineProject } from "react-icons/ai";
import { TbLogs } from "react-icons/tb";
import { GrServices } from "react-icons/gr";
import { FaRegEnvelope } from "react-icons/fa6";

const data = [
  { name: "Home", icon: <TiHomeOutline />, id: "home" },
  { name: "About", icon: <LuUser2 />, id: "about" },
  { name: "Achievements", icon: <TbRosette />, id: "achievements" },
  { name: "Certificates", icon: <LiaCertificateSolid />, id: "certificates" },
  { name: "Projects", icon: <AiOutlineProject />, id: "projects" },
  { name: "Blogs", icon: <TbLogs />, id: "blogs" },
  { name: "Services", icon: <GrServices />, id: "services" },
  { name: "Contact", icon: <FaRegEnvelope />, id: "contact" },
];

const NavBars = ({ refs }) => {
  const [activeId, setActiveId] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);
  console.log(refs , "ngizi refs")

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    Object.keys(refs).forEach((id) => {
      const section = refs[id].current;
    
      if (section) {
        const { offsetTop, offsetHeight } = section;
        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) setActiveId(id);
        else setActiveId(null);
        
        

        console.log(activeId, "narimpfuye mwa");
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="fixed bg-transparent z-50 top-10 bottom-10 left-4">
      <ul className="sm:flex flex-col hidden gap-3 justify-between max-h-[77%]">
        {data.map((el) => (
          <li
            key={el.id}
            className={`p-4 min-h-12 min-w-12 bg-gray-200 rounded-full duration-300 ease-in-out w-fit flex gap-2 justify-center items-center ${
              hoveredId === el.id ? "hover:px-3 hover:text-white hover:font-bold hover:cursor-pointer hover:bg-blue-700"
                                  : ""
              
            } ${activeId ? "bg-gray-200" : "bg-blue-700"} }`}
            // onClick={() => {
            //   const section = refs[el.id].current;
            //   if (section) {
            //     section.scrollIntoView({ behavior: "smooth" });
            //   }
            // }}
            onMouseEnter={() => setHoveredId(el.id)}
                onMouseLeave={() => setHoveredId(null)}
          >
            {el.icon}
            <span
              className={
                hoveredId === el.id
                  ? "block transition ease-in-out text-white font-bold"
                  : "hidden ease-in-out duration-200"
              }
            >
              {el.name}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBars;


