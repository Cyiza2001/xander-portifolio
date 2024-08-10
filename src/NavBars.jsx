import { useState, useEffect, forwardRef } from "react";
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

const NavBars = ({ refs, isNavBarVisible }) => {
  const [activeId, setActiveId] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);

  const liFixed =
    "w-11/12 mx-3 my-2 min-h-12 min-w-12 rounded-full flex flex-row items-center pl-4 py-3 gap-2";
  const liFlexible =
    "p-4 min-h-12 min-w-12 rounded-full duration-300 ease-in-out w-fit flex gap-2 justify-center items-center";

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    Object.keys(refs).forEach((id) => {
      const section = refs[id].current;
  console.log(section , "kabaye")
      if (section) {
        const { offsetTop, offsetHeight } = section;
        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        )
          setActiveId(id);
      }
    });
  };

  useEffect(() => {
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [refs]);

  return (
    <nav
      className={`fixed sm:bg-transparent bg-white z-30 sm:top-10 top:0 h-screen sm:border-none  border-gray-300  sm:bottom-10 bottom-0 sm:left-4 left-0 py-14 sm:py-3 `}
      style={{
        width: isNavBarVisible ? "280px" : "0",
        borderRightWidth: "1px",
      }}
    >
      <ul
        className={`sm:flex flex-col ${
          isNavBarVisible ? "block" : "hidden"
        } gap-3 justify-between   sm:max-h-[77%]`}
      >
        {data.map((el) => (
          <li
            key={el.id}
            className={`${isNavBarVisible ? liFixed : liFlexible} ${
              hoveredId === el.id
                ? "hover:px-3 hover:text-white hover:font-bold hover:cursor-pointer hover:bg-blue-700"
                : " "
            } ${
              activeId === el.id ? "bg-blue-700 text-white" : "bg-gray-200"
            } `}
            onClick={() => {
              console.log(refs, activeId, "scrool ref");
              const section = refs[el.id].current;

              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
            onMouseEnter={() => setHoveredId(el.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {el.icon}

            <span
              className={
                hoveredId === el.id || isNavBarVisible
                  ? "block transition ease-in-out sm:text-white   hover:font-bold"
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
