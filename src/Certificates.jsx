// import { forwardRef } from "react"
// import cert from "/images/certify.jpg"
// import UseVisibility from "./UseVisibility";
// const certificates= [ {certIcon: cert },
//   {certIcon: cert },
//   {certIcon: cert },
 
// ]

// const Certificates  = forwardRef ((props, ref)=>{
//   const {isVisible, getStyles} =  UseVisibility(ref)
//     return(
//         <div ref={ref}   className="flex flex-col"  style={{
//           ...getStyles()
//         }}>

//     <div className="flex flex-col justify-center items-center">
//         <div className="flex font-bold text-2xl mt-14 mb-6">
//           PROFESSIONAL CERTIFICATES
//         </div>
//         <div className="flex " style={{ width: "122.83px" }}>
//           <div
//             className="flex justify-center items-center w-full rounded bg-gray-200 "
//             style={{ height: "2px" }}
//           >
//             <div className="h-1 rounded bg-blue-700  w-12"></div>
//           </div>
//         </div>
//       </div>
//       {/****************************************CERTFICATES******************************************/}
//       <div className="flex flex-wrap  my-20 justify-center items-center ">
//       { certificates.map(el =>{
//         return(
//           <div className="relative overflow-hidden m-2  h-52 w-80">
//             <div>
//               <img src={`${el.certIcon}`} alt="certicicate" className="h-52 w-80 object-cover" />
//             </div>
     
//             <div className="absolute z-50 opacity-0 hover:opacity-100 transition-opacity duration-300 ">
//                  <div className="h-2 w-36 bg-black "></div>
//                  <div className="h-28 w-2 bg-black "></div>  
//             </div>
//          </div>
//         )
//       })
     

// }



        
//       </div>
       
       

//         </div>
    
//     )
// })

// export default Certificates;

import { forwardRef } from "react";
import cert from "/images/certify.jpg";
import UseVisibility from "./UseVisibility";
import { LuZoomIn } from "react-icons/lu";

const certificates = [
  { certIcon: cert },
  { certIcon: cert },
  { certIcon: cert },
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
        <div className="flex font-bold text-2xl mt-14 mb-6">
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
      {/****************************************CERTFICATES******************************************/}
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
                className="h-52 w-80 object-cover"
              />

              {/* Absolute div for hover effect */}
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 bg-opacity-20 transition-opacity duration-1000  ">
                {/* Content inside the hover effect */}
                <div className="flex flex-col items-start mt-2 mr-4 ml-4">
                  <div className="h-1 w-28 bg-black"></div>
                  <div className="h-20 w-1 bg-black"></div>
                </div>
                   {/* zoom in icon and certificate description */}
                   <div className ="flex flex-col items-center ">

                    <h1 className="font-bold text-2xl">Modern Js Fundamentals</h1>
                     <div><LuZoomIn /></div>

                   </div>
              

                <div className="flex flex-col items-end mt-0 mr-4 mb-2">
                  <div className="h-24 w-1 bg-black"></div>
                  <div className="h-1 w-24 bg-black"></div>
                  
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
