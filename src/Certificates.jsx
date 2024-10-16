
// import { forwardRef } from "react";
// import cert from "/images/certify.jpg";
// import UseVisibility from "./UseVisibility";
// import { LuZoomIn } from "react-icons/lu";

// const certificates = [
//   { certIcon: cert },
//   { certIcon: cert },
//   { certIcon: cert },
// ];

// const Certificates = forwardRef((props, ref) => {
//   const { isVisible, getStyles } = UseVisibility(ref);

//   return (
//     <div
//       ref={ref}
//       className="flex flex-col"
//       style={{
//         ...getStyles(),
//       }}
//     >
//       <div className="flex flex-col justify-center items-center">
//         <div className="flex font-bold text-2xl mt-14 mb-6">
//           PROFESSIONAL CERTIFICATES
//         </div>
//         <div className="flex" style={{ width: "122.83px" }}>
//           <div
//             className="flex justify-center items-center w-full rounded bg-gray-200"
//             style={{ height: "2px" }}
//           >
//             <div className="h-1 rounded bg-blue-700 w-12"></div>
//           </div>
//         </div>
//       </div>
//       {/****************************************CERTFICATES******************************************/}
//       <div className="flex flex-wrap my-20 justify-center items-center">
//         {certificates.map((el, index) => {
//           return (
//             <div
//               key={index}
//               className="relative overflow-hidden m-2 h-52 w-80 group"
//             >
//               {/* Certificate Image */}
//               <img
//                 src={el.certIcon}
//                 alt="certificate"
//                 className="h-52 w-80 object-cover"
//               />
//                 <div className ="flex flex-col items-center justify-center absolute inset-0 z-20 opacity-0 hover:opacity-100 transition-opacity duration-1000 ">

// <h1 className="font-bold text-xl">Modern Js Fundamentals</h1>
// <div className="text-2xl"><LuZoomIn /></div>

// </div>

//               {/* Absolute div for hover effect */}
//               <div className="absolute inset-0 z-10">
//                 {/* Content inside the hover effect */}
//                 <div className="  bg-black opacity-0  hover:opacity-50 bg-opacity-50 transition-opacity duration-1000 ">
//                 
//                 </div>
//                        {/* zoom in icon and certificate description */}
             

               
//               </div>
              
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// });

// export default Certificates;


import { forwardRef } from "react";
import cert from "/images/certify.jpg";
import UseVisibility from "./UseVisibility";
import { LuZoomIn } from "react-icons/lu";

const certificates = [
  { certIcon: cert, title: "Sys Admin & IT Infra. @ Google Inc." },
  { certIcon: cert, title: "Sys Admin & IT Infra. @ Google Inc." },
  { certIcon: cert, title: "Sys Admin & IT Infra. @ Google Inc." },
];

const Certificates = forwardRef((props, ref) => {
  const { isVisible, getStyles } = UseVisibility(ref);

  return (
    <div
      ref={ref}
      className="flex flex-col"
      style={{
        ...getStyles(),
      }}
    >
      <div className="flex flex-col justify-center items-center">
        <div className="flex font-bold text-2xl mt-14 mb-6 text-gray-800">
          PROFESSIONAL CERTIFICATES
        </div>
        <div className="flex" style={{ width: "122.83px" }}>
          <div
            className="flex justify-center items-center w-full rounded bg-gray-200"
            style={{ height: "2px" }}
          >
            <div className="h-1 rounded bg-blue-700 w-12"></div>
          </div>
        </div>
      </div>

      {/* Certificates */}
      <div className="flex flex-wrap my-20 justify-center items-center">
        {certificates.map((el, index) => {
          return (
            <div
              key={index}
              className="relative overflow-hidden m-2 h-52 w-80 group"
            >

              {/* Certificate Image */}
              <img
                src={el.certIcon}
                alt="certificate"
                className="h-52 w-80 object-cover transition-transform duration-300 group-hover:scale-105"
              />
                 <div className=" bg-black opacity-0 group-hover:opacity-90 group-hover:bg-opacity-90 group-hover:transition-opacity duration-300">
                            <div className="flex flex-col items-start mt-2 mr-4 ml-4">
                              <div className="h-1 w-28 bg-black"></div>
                              <div className="h-20 w-1 bg-black"></div>
                            </div>
                            
                            <div className="flex flex-col items-end mt-0 mr-4 mb-2">                  
                               <div className="h-24 w-1 bg-black"></div>
                              <div className="h-1 w-24 bg-black"></div>
                            </div>

                          {/* Overlay with zoom icon and title */}
                          <div className="flex flex-col items-center justify-center absolute inset-0">
                            <h1 className="font-bold text-2xl text-center text-black px-4 mb-2">
                              {el.title}
                            </h1>
                            <div className="font-bold text-black text-xl">
                              <LuZoomIn />
                            </div>
                          </div>

                 </div>
                

              {/* Border effect */}
              <div className="absolute inset-0 z-0">
                <div className="w-full h-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-full h-full border-2 border-white"></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
});

export default Certificates;


