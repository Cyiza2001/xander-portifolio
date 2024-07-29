import picture from "/images/pic.png"
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";


const Testimonials = ()=>{
    return(
      
        <div className="flex flex-col">
  <div className="flex flex-col justify-center items-center">
        <div className="flex font-bold text-2xl mt-3 mb-6">
          TESTIMONIALS
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

        {/************* MAIN TESTIMONIES ******************/}

        <div className="flex flex-col">
            <div className="flex flex-col  justify-center items-center">
             <div className="flex mt-12 border-2 border-gray-200 overflow-hidden rounded-full h-16 w-16 "><img src={picture} alt=" Testimony Giver" className="object-cover h-full w-full" /></div>
             <p className="font-bold mt-2 text-lg " style={{marginBottom:"1px"}}>KALISA TCHAMI</p>
             <p className="text-gray-400 font-semibold text-base">Software Engineer at SevenX</p>
            </div>
            <div className="flex flex-wrap">
            
                <FaQuoteLeft className="text-blue-700" />
               <p className="flex flex-row">I've seen firsthand how dedicated and skilled Cyiza is as a software developer. With expertise in technologies like React, Express.js, and MongoDB, they consistently deliver robust and innovative solutions. Their commitment to best practices and strong ethical values make them a standout professional in the field.</p>
               <FaQuoteRight className="text-blue-700"  />
        
                
         
             </div>
         
        </div>
        </div>
    )
}

export default Testimonials;