// import { HiOutlineEmojiHappy } from "react-icons/hi";
// import { AiOutlineProject } from "react-icons/ai";
// import { LiaCertificateSolid } from "react-icons/lia";
// import { IoMdTime } from "react-icons/io";
// import { FaAt } from "react-icons/fa";
// import { forwardRef } from "react";
// import UseVisibility from "./UseVisibility";
// const stats = [
//   {
//     icon: <HiOutlineEmojiHappy style={{ width: "30px", height: "30px" }} />,
//     number: "618",
//     title: "Happy Clients",
//   },
//   {
//     icon: <AiOutlineProject style={{ width: "30px", height: "30px" }} />,
//     number: "314",
//     title: "Completed Projects",
//   },
//   {
//     icon: <LiaCertificateSolid style={{ width: "30px", height: "30px" }} />,
//     number: "37",
//     title: "Awards",
//   },
//   {
//     icon: <IoMdTime style={{ width: "30px", height: "30px" }} />,
//     number: "14",
//     title: "Working Hours per day",
//   },
// ];

// const Achievements = forwardRef((props, ref) => {

//   const {isVisible, getStyles} =  UseVisibility(ref)
//   return (
//     <div ref={ref}   className="flex flex-col px-4"    style={{
//       ...getStyles()
//     }}>
//       <div className="flex flex-col  justify-center items-center">
//         <div className="flex font-bold text-2xl mt-14 mb-6">STATS</div>
//         <div className="flex " style={{ width: "122.83px" }}>
//           <div
//             className="flex  justify-center items-center w-full rounded bg-gray-200 "
//             style={{ height: "2px" }}
//           >
//             <div className="h-1 rounded bg-blue-700  w-12"></div>
//           </div>
//         </div>
//         <p className="flex  my-6 font-normal">Achievements & Statistics</p>
//       </div>
//       {/***********************************************STATS DIVS DOWN HERE************************************************************** */}
//       <div className="flex sm:flex-row flex-col sm:gap-36  gap-10 justify-center items-center mt-3 px-14">
//         {stats.map((el) => {
//           return (
//             <div className="flex flex-col gap-2 justify-center items-center">
//               <div className="flex items-center justify-center bg-blue-700 rounded-full h-12 w-12">
//                 <div className="text-white">{el.icon}</div>
//               </div>

//               <p className="font-bold text-3xl">{el.number}</p>
//               <p className="font-thin">{el.title}</p>
//             </div>
//           );
//         })}
//       </div>








     
//     </div>
//   );
// });

// export default Achievements;

import { useState, useEffect } from "react";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { AiOutlineProject } from "react-icons/ai";
import { LiaCertificateSolid } from "react-icons/lia";
import { IoMdTime } from "react-icons/io";
import { FaAt } from "react-icons/fa";
import { forwardRef } from "react";
import UseVisibility from "./UseVisibility";

const stats = [
  {
    icon: <HiOutlineEmojiHappy style={{ width: "30px", height: "30px" }} />,
    number: 618,
    title: "Happy Clients",
  },
  {
    icon: <AiOutlineProject style={{ width: "30px", height: "30px" }} />,
    number: 314,
    title: "Completed Projects",
  },
  {
    icon: <LiaCertificateSolid style={{ width: "30px", height: "30px" }} />,
    number: 37,
    title: "Awards",
  },
  {
    icon: <IoMdTime style={{ width: "30px", height: "30px" }} />,
    number: 14,
    title: "Working Hours per day",
  },
];

const Achievements = forwardRef((props, ref) => {
  const { isVisible, getStyles } = UseVisibility(ref);
  const [animatedStats, setAnimatedStats] = useState(
    stats.map(() => 0) 
  );


  const maxNumber = Math.max(...stats.map((stat) => stat.number));
  const animationDuration = 2000;
  const steps = 50; 
  const intervalDuration = animationDuration / steps;

  // Function to handle the number animation
  const animateNumbers = () => {
    const newStats = stats.map((stat, index) => {
      const currentNumber = animatedStats[index];
      const targetNumber = stat.number;

      // Calculate proportional increment for each stat
      const increment = (targetNumber / maxNumber) * (maxNumber / steps);

      if (currentNumber < targetNumber) return Math.min(currentNumber + increment, targetNumber);
      
return currentNumber;
    });
    setAnimatedStats(newStats);
  };

  useEffect(() => {
    if (isVisible) {
      const intervalId = setInterval(() => {
        animateNumbers();
      }, intervalDuration); 
      return () => clearInterval(intervalId); 
    }
  }, [isVisible, animatedStats]);

  return (
    <div ref={ref} className="flex flex-col px-4" style={getStyles()}>
      <div className="flex flex-col justify-center items-center">
        <div className="flex font-bold text-2xl mt-14 mb-6">STATS</div>
        <div className="flex " style={{ width: "122.83px" }}>
          <div
            className="flex justify-center items-center w-full rounded bg-gray-200 "
            style={{ height: "2px" }}
          >
            <div className="h-1 rounded bg-blue-700 w-12"></div>
          </div>
        </div>
        <p className="flex  my-6 font-normal">Achievements & Statistics</p>
      </div>
      <div className="flex sm:flex-row flex-col sm:gap-36 gap-10 justify-center items-center mt-3 px-14">
        {stats.map((el, index) => (
          <div key={index} className="flex flex-col gap-2 justify-center items-center">
            <div className="flex items-center justify-center bg-blue-700 rounded-full h-12 w-12">
              <div className="text-white">{el.icon}</div>
            </div>
            <p className="font-bold text-3xl">{Math.floor(animatedStats[index])}</p>
            <p className="font-thin">{el.title}</p>
          </div>
        ))}
      </div>
  

           {/******************************************************** DEGREE AND ATTAINMENT **********************************************/}

           <div className="flex flex-col justify-center items-center">
        <div className="flex font-bold text-2xl mt-14 mb-6">
          DEGREE AND ATTAINMENT
        </div>
        <div className="flex " style={{ width: "122.83px" }}>
          <div
            className="flex justify-center items-center w-full rounded bg-gray-200 "
            style={{ height: "2px" }}
          >
            <div className="h-1 rounded bg-blue-700  w-12"></div>
          </div>
        </div>
      </div>


      <div className="flex sm:flex-row flex-col justify-center sm:px-0 px-4  w-screen  gap-4 mt-4">
              
      <div>
      <div className="flex flex-col justify-center items-start ">
        <h1 className="font-bold text-2xl m-2">Degree</h1>
        <div className="flex flex-row items-start gap-4 ">
          <div className="flex flex-col items-center">
            <div className="h-4 w-4  border-2 border-blue-700 rounded-full bg-white"></div>
            <div className="h-40  bg-blue-700" style={{ width: "2px" }}></div>
          </div>
          <div>
            <div className="text-blue-700 font-semibold text-sm  mb-1">
              BACHELOR'S DEGREE IN ELECTRONICS AND TELECOMMUNICATIONS
              ENGINEERING
            </div>
            <p className="bg-gray-100 w-24 p-1 font-medium font-serif">
              2019-2024
            </p>
            <p className="flex flex-row items-center gap-2 my-4 ">
              <FaAt className="font-light" />
              <a
                href="https://x.com/Uni_Rwanda"
                className="text-blue-700 font-semibold hover:text-blue-400 "
              >
                University of Rwanda
              </a>
            </p>
            <p>
              <a
                href="https://x.com/urcst"
                className="text-blue-600 mr-1 hover:text-blue-400"
              >
                College of Science and Technology,
              </a>
              Former KIST
            </p>
          </div>
        </div>
        {/*******************HIGH SCHOOL QUALIFICATIONS*********************************** */}

        <div className="flex flex-row items-start gap-4 ">
          <div className="flex flex-col items-center">
            <div className="h-4 w-4  border-2 border-blue-700 rounded-full bg-white"></div>
            <div className="h-28  bg-blue-700" style={{ width: "2px" }}></div>
          </div>
          <div>
            <div className="text-blue-700 font-semibold text-sm  mb-1">
              A2-IN PHYSICS-CHEMESTRY-MATHEMATICS 
            </div>
            <p className="bg-gray-100 w-24 p-1 font-medium font-serif">
              2016-2018
            </p>
            <p className="flex flex-row items-center gap-2 my-4 ">
              <FaAt className="font-light" />
              <a
                href="https://x.com/AndreColle36567"
                className="text-blue-700 font-semibold hover:text-blue-400 "
              >
                College Saint Andre
              </a>
            </p>
         
          </div>
        </div>
             {/* ********************FULL STACK DEVELOPMENT********************************** */}
        <div className="flex flex-row items-start gap-4 ">
          <div className="flex flex-col items-center">
            <div className="h-4 w-4  border-2 border-blue-700 rounded-full bg-white"></div>
            <div className="h-20  bg-blue-700" style={{ width: "2px" }}></div>
          </div>
          <div>
            <div className="text-blue-700 font-semibold text-sm  mb-1">
              FULL-STACK DEVELOPMENT
            </div>
            <p className="bg-gray-100 w-28 p-1 mb-2 font-medium font-serif">
              2023-Present
            </p>
           <p>Stack overflow and Github</p>
         
          </div>
        </div>
      </div>
    </div>


{/********** * EXPERIENCE AND STATS ***************************/}
      <div>
      <div className="flex flex-col justify-center items-start">
        <h1 className="font-bold text-2xl m-2">EXPERIENCE AND STATS</h1>
        <div className="flex flex-row items-start gap-4 ">
          <div className="flex flex-col items-center">
            <div className="h-4 w-4  border-2 border-blue-700 rounded-full bg-white"></div>
            <div className="h-40  bg-blue-700" style={{ width: "2px" }}></div>
          </div>
          <div>
            <div className="text-blue-700 font-semibold text-sm  mb-1">
              JUNIOR SOFTWARE DEVELOPER
            </div>
            <p className="bg-gray-100 w-24 p-1 font-medium font-serif">
              2024
            </p>
            <p className="flex flex-row items-center gap-2 my-4 ">
              <FaAt className="font-light" />
              <a
                href="https://x.com/Uni_Rwanda"
                className="text-blue-700 font-semibold hover:text-blue-400 "
              >
                University of Rwanda
              </a>
            </p>
            <p>
              <a
                href="https://x.com/urcst"
                className="text-blue-600 mr-1 hover:text-blue-400"
              >
                College of Science and Technology,
              </a>
              Former KIST
            </p>
          </div>
        </div>
        {/*******************HIGH SCHOOL QUALIFICATIONS*********************************** */}

        <div className="flex flex-row items-start gap-4 ">
          <div className="flex flex-col items-center">
            <div className="h-4 w-4  border-2 border-blue-700 rounded-full bg-white"></div>
            <div className="h-28  bg-blue-700" style={{ width: "2px" }}></div>
          </div>
          <div>
            <div className="text-blue-700 font-semibold text-sm  mb-1">
              A2-IN PHYSICS-CHEMESTRY-MATHEMATICS 
            </div>
            <p className="bg-gray-100 w-24 p-1 font-medium font-serif">
              2016-2018
            </p>
            <p className="flex flex-row items-center gap-2 my-4 ">
              <FaAt className="font-light" />
              <a
                href="https://x.com/AndreColle36567"
                className="text-blue-700 font-semibold hover:text-blue-400 "
              >
                College Saint Andre
              </a>
            </p>
         
          </div>
        </div>
             {/* ********************FULL STACK DEVELOPMENT********************************** */}
        <div className="flex flex-row items-start gap-4 ">
          <div className="flex flex-col items-center">
            <div className="h-4 w-4  border-2 border-blue-700 rounded-full bg-white"></div>
            <div className="h-20  bg-blue-700" style={{ width: "2px" }}></div>
          </div>
          <div>
            <div className="text-blue-700 font-semibold text-sm  mb-1">
              FULL-STACK DEVELOPMENT
            </div>
            <p className="bg-gray-100 w-28 p-1 mb-2 font-medium font-serif">
              2023-Present
            </p>
           <p>Stack overflow and Github</p>
         
          </div>
        </div>
      </div>
      </div>
      </div>

    </div>
  );
});

export default Achievements;
