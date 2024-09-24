import { forwardRef } from "react"
import cert from "/images/certify.jpg"
import UseVisibility from "./UseVisibility";
const certificates= [ {certIcon: cert },
  {certIcon: cert },
  {certIcon: cert },
  {certIcon: cert },
  {certIcon: cert },
  {certIcon: cert },
  {certIcon: cert },
  {certIcon: cert },
  {certIcon: cert }, 
]

const Certificates  = forwardRef ((props, ref)=>{
  const {isVisible, getStyles} =  UseVisibility(ref)
    return(
        <div ref={ref}   className="flex flex-col"  style={{
          ...getStyles()
        }}>

    <div className="flex flex-col justify-center items-center">
        <div className="flex font-bold text-2xl mt-14 mb-6">
          PROFESSIONAL CERTIFICATES
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
      {/****************************************CERTFICATES******************************************/}
      <div className="flex flex-wrap  my-20 justify-center items-center ">
      { certificates.map(el =>{
        return(
          <div className="relative overflow-hidden m-2  h-52 border-red-700">
            <div>   <img src={`${el.certIcon}`} alt="certicicate" className="h-52 w-80 object-cover" /></div>
       
         </div>
        )
      })
     

}


<div className="absolute z-50 bg-red-600 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div className="h-48 w-2 bg-black "></div>
            
          </div>
        
      </div>
       
       

        </div>
    
    )
})

export default Certificates;