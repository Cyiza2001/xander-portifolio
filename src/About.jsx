import React from 'react';
import { FaGlassCheers } from "react-icons/fa";


const About = ()=>{
    return (
    
    <div className="flex flex-col justify-center  items-center"> 
    <div>
    <div>ABOUT</div>
    <div className="flex items-center justify-center">
        <div className="flex-grow border-t border-blue-300"></div>
        <span className="mx-4 text-blue-600 font-bold border-red-800"></span>
        <div className="flex-grow border-t border-blue-300"></div>
      </div>
    </div>

 <div className='flex flex-row gap-1 items-center'>Trust is built with consistence <span className=' text-yellow-400'><FaGlassCheers /></span></div>

 <div>
        <div><img src="" alt="" /></div>
        <div >
            <div>Biography</div>
            <div className='flex flex-row '>
               <div className='flex flex-row items-center font-bold '>Ndanyuzwe Cyiza Alexandre<span className='w-px h-4 bg-black mx-1'></span></div>
               <div className='flex flex-row items-center font-bold '>Life Long Learner<span className='w-px h-4 bg-black mx-1 font-bold'></span></div>
               <div className='font-bold'>A dedicated Software developer</div>
            </div>
           

        </div>
         </div>
    {/*
   
  

        
            <div>
            <div>
                <div><img src="" alt="" /></div>
                <div>Email:</div>
                <div>ndanyuzwealexandre@gmail.com</div>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
       </div>
       
    </div> */}
</div>

    )
}
export default About;