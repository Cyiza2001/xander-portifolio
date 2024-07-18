import React from "react";
import { FaGlassCheers } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const About = () => {
  return (
    <div className="flex flex-col justify-center  items-center">
      <div>
        <div className="flex font-bold text-4xl mt-14 mb-6">ABOUT</div>
        <div className="flex items-center justify-center">
          <div className="flex-grow border-t border-blue-300"></div>
          <span className="mx-4 text-blue-600 font-bold border-red-800"></span>
          <div className="flex-grow border-t border-blue-300"></div>
        </div>
      </div>

      <div className="flex flex-row gap-1 items-center my-6 font-bold">
        Trust is built with consistence{" "}
        <span className=" text-yellow-400">
          <FaGlassCheers />
        </span>
      </div>

      <div className="flex flex-row gap-10">
        <div>
          <img src="/images/mypic.png" alt="my pic" />
        </div>
        <div className="flex flex-col items-start justify-start">
          <div className="flex text-gray-500 font-bold text-2xl mb-3">
            Biography
          </div>
          <div className="flex flex-row ">
            <div className="flex flex-row items-center font-bold ">
              Ndanyuzwe Cyiza Alexandre
              <span className="w-px h-4 bg-black mx-1"></span>
            </div>
            <div className="flex flex-row items-center font-bold ">
              Life Long Learner
              <span className="w-px h-4 bg-black mx-1 font-bold"></span>
            </div>
            <div className="font-bold">A dedicated Software developer.</div>
          </div>

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
            <div className="font-bold">Interested In:</div>
            <div>Software Engineering & AI & Music</div>
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
        </div>
      </div>
    </div>
  );
};
export default About;
