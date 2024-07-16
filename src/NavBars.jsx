// import { Link } from 'react-router-dom';
// // import { HomeIcon, AboutIcon, AchievementsIcon, CertificateIcon, ProjectsIcon, BlogsIcon, ServicesIcon, ContactsIcon } from './icons'; // Assuming you have these icons

// const NavBar = () => {
//   return (
//     <nav className="fixed left-10 top-8 bottom-8 flex flex-col items-start space-y-4 p-4 bg-gray-800 text-white rounded-lg shadow-lg">
//       <ul className="space-y-4">
//         <li>
//           <Link to="/" className="flex items-center space-x-2 group">
//             <HomeIcon className="w-6 h-6" />
//             <span className="group-hover:inline-block hidden">Home</span>
//           </Link>
//         </li>
//         <li>
//           <Link to="/about" className="flex items-center space-x-2 group">
//             <AboutIcon className="w-6 h-6" />
//             <span className="group-hover:inline-block hidden">About</span>
//           </Link>
//         </li>
//         <li>
//           <Link to="/achievements" className="flex items-center space-x-2 group">
//             <AchievementsIcon className="w-6 h-6" />
//             <span className="group-hover:inline-block hidden">Achievements</span>
//           </Link>
//         </li>
//         <li>
//           <Link to="/certificate" className="flex items-center space-x-2 group">
//             <CertificateIcon className="w-6 h-6" />
//             <span className="group-hover:inline-block hidden">Certificate</span>
//           </Link>
//         </li>
//         <li>
//           <Link to="/projects" className="flex items-center space-x-2 group">
//             <ProjectsIcon className="w-6 h-6" />
//             <span className="group-hover:inline-block hidden">Projects</span>
//           </Link>
//         </li>
//         <li>
//           <Link to="/blogs" className="flex items-center space-x-2 group">
//             <BlogsIcon className="w-6 h-6" />
//             <span className="group-hover:inline-block hidden">Blogs</span>
//           </Link>
//         </li>
//         <li>
//           <Link to="/services" className="flex items-center space-x-2 group">
//             <ServicesIcon className="w-6 h-6" />
//             <span className="group-hover:inline-block hidden">Services</span>
//           </Link>
//         </li>
//         <li>
//           <Link to="/contacts" className="flex items-center space-x-2 group">
//             <ContactsIcon className="w-6 h-6" />
//             <span className="group-hover:inline-block hidden">Contacts</span>
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default NavBar;
import { useState } from "react";
import { TiHomeOutline } from "react-icons/ti";
import { LuUser2 } from "react-icons/lu";
import { TbRosette } from "react-icons/tb";
import { LiaCertificateSolid } from "react-icons/lia";
import { AiOutlineProject } from "react-icons/ai";
import { TbLogs } from "react-icons/tb";
import { GrServices } from "react-icons/gr";
import { FaRegEnvelope } from "react-icons/fa6";

const NavBars = () => {
  const [ishover, setHOver] = useState(false);
  return (
    <nav className="fixed bg-transparent z-50 top-10 bottom-10 left-6 ">
      <ul className=" flex flex-col gap-3 justify-between">
        <li
          className="p-4 min-h-12 min-w-12 hover:px-3 hover:text-white hover: font-bold bg-white rounded-full hover:bg-blue-700 duration-300 hover:ease-in-out ease-in-out w-fit flex gap-2 justify-center items-center"
          onMouseEnter={() => setHOver(true)}
          onMouseLeave={() => setHOver(false)}
        >
          <TiHomeOutline />
          <span
            className={
              ishover
                ? "block duration-200 transition ease-in-out "
                : "ease-in-out delay-150 hidden duration-200"
            }
          >
            Home
          </span>
        </li>
        <li
          className="p-4 min-h-12 min-w-12 hover:px-3 hover:text-white hover: font-bold bg-white rounded-full hover:bg-blue-700 duration-300 hover:ease-in-out ease-in-out w-fit flex gap-2 justify-center items-center"
          onMouseEnter={() => setHOver(true)}
          onMouseLeave={() => setHOver(false)}
        >
          <LuUser2 />
          <span
            className={
              ishover
                ? "block duration-200 transition ease-in-out "
                : "ease-in-out delay-150 hidden duration-200"
            }
          >
            About
          </span>
        </li>
        <li
          className="p-4 min-h-12 min-w-12 hover:px-3 hover:text-white hover: font-bold bg-white rounded-full hover:bg-blue-700 duration-300 hover:ease-in-out ease-in-out w-fit flex gap-2 justify-center items-center"
          onMouseEnter={() => setHOver(true)}
          onMouseLeave={() => setHOver(false)}
        >
          <TbRosette />
          <span
            className={
              ishover
                ? "block duration-200 transition ease-in-out "
                : "ease-in-out delay-150 hidden duration-200"
            }
          >
            Achievements
          </span>
        </li>
        <li
          className="p-4 min-h-12 min-w-12 hover:px-3 hover:text-white hover: font-bold bg-white rounded-full hover:bg-blue-700 duration-300 hover:ease-in-out ease-in-out w-fit flex gap-2 justify-center items-center"
          onMouseEnter={() => setHOver(true)}
          onMouseLeave={() => setHOver(false)}
        >
          <LiaCertificateSolid />
          <span
            className={
              ishover
                ? "block duration-200 transition ease-in-out "
                : "ease-in-out delay-150 hidden duration-200"
            }
          >
            Certificate
          </span>
        </li>
        <li
          className="p-4 min-h-12 min-w-12 hover:px-3 hover:text-white hover: font-bold bg-white rounded-full hover:bg-blue-700 duration-300 hover:ease-in-out ease-in-out w-fit flex gap-2 justify-center items-center"
          onMouseEnter={() => setHOver(true)}
          onMouseLeave={() => setHOver(false)}
        >
          <AiOutlineProject />
          <span
            className={
              ishover
                ? "block duration-200 transition ease-in-out "
                : "ease-in-out delay-150 hidden duration-200"
            }
          >
            Projects
          </span>
        </li>
        <li
          className="p-4 min-h-12 min-w-12 hover:px-3 hover:text-white hover: font-bold bg-white rounded-full hover:bg-blue-700 duration-300 hover:ease-in-out ease-in-out w-fit flex gap-2 justify-center items-center"
          onMouseEnter={() => setHOver(true)}
          onMouseLeave={() => setHOver(false)}
        >
          <TbLogs />
          <span
            className={
              ishover
                ? "block duration-200 transition ease-in-out "
                : "ease-in-out delay-150 hidden duration-200"
            }
          >
            Blogs
          </span>
        </li>
        <li
          className="p-4 min-h-12 min-w-12 hover:px-3 hover:text-white hover: font-bold bg-white rounded-full hover:bg-blue-700 duration-300 hover:ease-in-out ease-in-out w-fit flex gap-2 justify-center items-center"
          onMouseEnter={() => setHOver(true)}
          onMouseLeave={() => setHOver(false)}
        >
          <GrServices />
          <span
            className={
              ishover
                ? "block duration-200 transition ease-in-out "
                : "ease-in-out delay-150 hidden duration-200"
            }
          >
            Services
          </span>
        </li>
        <li
          className="p-4 min-h-12 min-w-12 hover:px-3 hover:text-white hover: font-bold bg-white rounded-full hover:bg-blue-700 duration-300 hover:ease-in-out ease-in-out w-fit flex gap-2 justify-center items-center"
          onMouseEnter={() => setHOver(true)}
          onMouseLeave={() => setHOver(false)}
        >
          <FaRegEnvelope />
          <span
            className={
              ishover
                ? "block duration-200 transition ease-in-out "
                : "ease-in-out delay-150 hidden duration-200"
            }
          >
            Contacts
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default NavBars;
