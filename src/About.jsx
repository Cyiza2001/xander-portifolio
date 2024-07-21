import React from "react";
import { FaGlassCheers } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import picture from "/images/pic.png"

// const progress = [
//   {skill1:"HTML & CSS" , percentage1: "98%", skill2:"Node Js" , percentage2: "90%"},
 
//   {skill1:"Express Js" , percentage1: "92%",skill2:"MongoDb" , percentage2: "84%"},
  
//   {skill1:"Cloudinary Js" , percentage1: "96%",skill2:"Multer Js" , percentage2: "92%"},
  
//   {skill1:"React Js" , percentage1: "91%", skill2:"jest & Supertest" , percentage2: "80%"},

// ]
const progress = [
  {skill1:"HTML & CSS" , percentage1: "98%"},
 
  {skill1:"HTML & CSS" , percentage1: "98%"},
  
  {skill1:"HTML & CSS" , percentage1: "98%"},
  
  {skill1:"HTML & CSS" , percentage1: "98%"},

]


const About = () => {
  return (
  
    <div className="flex flex-col px-4">
      <div className="flex flex-col justify-center items-center" >
        <div className="flex font-bold text-2xl mt-14 mb-6">ABOUT</div>
        <div className="flex " style={{width:"122.83px"}}>
         <div className="flex justify-center items-center w-full rounded bg-gray-200 " style={{height:"2px"}}>
          <div className="h-1 rounded bg-blue-700  w-12"></div>
         </div>
        </div>
        <p className="flex  my-6 font-bold text-sm  sm:text-xl">
      "Empowering the Future: Merging Software Engineering and Cutting-Edge Technologies" - Cyiza
      </p>
      </div>

      

      <div className=" flex sm:flex-row flex-col relative gap-6">
        <div className="relative w-96 h-64  ">
          <img src={picture} alt="my pic" className="absolute top-0 right-0 w-96" />
        </div>
        <div className="flex flex-col items-start justify-start">
          <div className="flex text-gray-500 font-bold text-2xl mb-3">
            Biography
          </div>
          <div className="flex flex-row mb-3 text-sm sm:text-base ">
            <div className="flex flex-row items-center font-bold  ">
              Ndanyuzwe Cyiza Alexandre
              <span className="w-px sm:h-4 h-8 bg-black mx-1"></span>
            </div>
            <div className="flex flex-row items-center font-bold ">
              Life Long Learner
              <span className="w-px sm:h-4 h-8 bg-black mx-1 font-bold"></span>
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
  
      <div className="flex flex-col justify-center items-center ">
        <div className="flex font-bold text-2xl mt-14 mb-6">KNOWLEDGE AND SKILLS</div>
        <div className="flex " style={{width:"122.83px"}}>
         <div className="flex justify-center items-center w-full rounded bg-gray-200 " style={{height:"2px"}}>
          <div className="h-1 rounded bg-blue-700  w-12"></div>
         </div>
        </div>
        <p className="flex  my-6 font-normal">
      Languages & Frameworks & Skills
      </p>
      </div>

      {/************************************** *PROGRESS BARS***************** ************/}
      {
      progress.map((el)=>{
        return(
          // <div className="flex sm:flex-row flex-col  sm:gap-7 w-screen sm:px-24">
          // <div className="flex flex-col gap-2 sm:w-1/2 w-screen  pl-6 pr-14 sm:px-0">
          //   <div className="flex flex-row justify-between"> <p>{el.skill1}</p>
          //    <p>{el.percentage1}</p>
          //   </div>
          //  <div className=" bg-gray-200  h-2">
          //  <div className="bg-blue-700 h-2  " style={{width:`${el.percentage1}`}}></div>
          //  </div>
          // </div>

          <div className="flex w-screen sm:px-24">
          <div className="flex flex-col gap-2 sm:w-1/2 w-screen  pl-6 pr-14 sm:px-0">
            <div className="flex flex-row justify-between"> <p>{el.skill1}</p>
             <p>{el.percentage1}</p>
            </div>
           <div className=" bg-gray-200  h-2">
           <div className="bg-blue-700 h-2  " style={{width:`${el.percentage1}`}}></div>
           </div>
          </div>


          


          {/* <div className="flex flex-col gap-2 sm:w-1/2 w-screen  pl-6 pr-14 sm:px-0">
            <div className="flex flex-row justify-between"> <p>{el.skill2}</p>
            <p>{el.percentage2}</p>
            </div>
           <div className=" bg-gray-200  h-2">
           <div className="bg-blue-700 h-2  " style={{width:`${el.percentage2}`}}></div>
           </div>
             
        
          </div> */}
       
          </div>
        )

      })
    }
         

    </div>

    
  );
};
export default About;
