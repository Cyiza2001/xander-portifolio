import React from "react";
import { FaGlassCheers } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import picture from "/images/pic.png"


const About = () => {
  return (
    <div className="flex flex-col justify-center  items-center">
      <div>
        <div className="flex font-bold text-4xl mt-14 mb-6">ABOUT</div>
        <div className="flex">
         <div className="flex justify-center items-center w-full rounded bg-gray-200 " style={{height:"2px"}}>
          <div className="h-1 rounded bg-blue-700  w-12"></div>
         </div>
        </div>
      </div>

      <div className="flex  my-6 font-bold">
      "Empowering the Future: Merging Software Engineering and Cutting-Edge Technologies" - Cyiza
      </div>

      <div className="relative flex flex-row gap-6">
        <div className="relative w-96 h-64  ">
          <img src={picture} alt="my pic" className="absolute top-0 right-0 w-96" />
        </div>
        <div className="flex flex-col items-start justify-start">
          <div className="flex text-gray-500 font-bold text-2xl mb-3">
            Biography
          </div>
          <div className="flex flex-row mb-3 ">
            <div className="flex flex-row items-center font-bold ">
              Ndanyuzwe Cyiza Alexandre
              <span className="w-px h-4 bg-black mx-1"></span>
            </div>
            <div className="flex flex-row items-center font-bold ">
              Life Long Learner
              <span className="w-px h-4 bg-black mx-1 font-bold"></span>
            </div>
            <div className="font-bold">Dedicated Software developer.</div>
          </div>
          <div className="flex flex-col gap-4">
          <div className="flex flex-row items-center gap-1">
            <div className="text-blue-700 text-2xl">
              <IoIosArrowForward />
            </div>
            <div className="font-bold">Email:</div>
            <div>ndanyuzwealexandre@gmail.com</div>
          </div>
          <div className="flex flex-row items-center gap-1">
            <div className="text-blue-700 text-2xl">
              <IoIosArrowForward />
            </div>
            <div className="font-bold">Phone:</div>
            <div>+250785587274</div>
          </div>
          <div className="flex flex-row items-center gap-1">
            <div className="text-blue-700 text-2xl">
              <IoIosArrowForward />
            </div>
            <div className="font-bold">"My Heart is in the work"</div>
            <div className="text-blue-600 font-medium"> -A. Carnegie</div>
          </div>
          <div className="flex flex-row items-center gap-1">
            <div className="text-blue-700 text-2xl">
              <IoIosArrowForward />
            </div>
            <div className="font-bold">Interested In:</div>
            <div>Software Engineering & AI & Music</div>
          </div>

          <div className="flex flex-row items-center gap-1">
            <div className="text-blue-700 text-2xl">
              <IoIosArrowForward />
            </div>
            <div className="flex flex-row  items-center gap-2 font-bold">  Trust is built with consistency{" "}
        <span className=" text-red-700">
          <FaGlassCheers />
        </span></div>
      
          </div>

          <div className="flex flex-row items-center gap-1">
            <div className="text-blue-700 text-2xl">
              <IoIosArrowForward />
            </div>
            <div className="font-bold">Birthday:</div>
            <div className="flex flex-row items-center font-bold">
              15 <span className="w-px h-4 bg-black mx-1 font-bold"></span>
              September
              <span className="w-px h-4 bg-black mx-1 font-bold"></span>
            </div>
          </div>
          <div className="flex flex-row items-center gap-1">
            <div className="text-blue-700 text-2xl">
              <IoIosArrowForward />
            </div>
            <div className="font-bold">Embrace the journey.</div>
          </div>
          <div className="flex flex-row items-center gap-1">
            <div className="text-blue-700 text-2xl">
              <IoIosArrowForward />
            </div>
            <div className="font-bold">"Decline is a Choice"</div>
            <div className="text-blue-700 font-medium">DeSantis</div>
          </div>
          <div className="flex flex-row items-center gap-1">
            <div className="text-blue-700 text-2xl">
              <IoIosArrowForward />
            </div>
            <div className="font-bold">Days:</div>
            <div>Sunday-Friday</div>
          </div>
          </div>
        </div>
      </div>
      {/* ******************************************KNOWLEDGE AND SKILLS*************************************************** */}
      <div>
        <div className="flex font-bold text-4xl mt-14 mb-6">KNOWLEDGE AND SKILLS</div>
        <div className="flex items-center justify-center">
          <div className="flex-grow border-t border-blue-300"></div>
          <span className="mx-4 text-blue-600 font-bold border-red-800"></span>
          <div className="flex-grow border-t border-blue-300"></div>
        </div>
      </div>

      <div className="flex  my-6 font-normal">
      Languages & Frameworks & Skills
      </div>

    </div>

    
  );
};
export default About;
