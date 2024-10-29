// import cert from "/images/certify.jpg"


// const DetailedPopup = ({isOpen, onClose})=>{
//     if(!isOpen) return null

//     return(
//         <Main className="relative inset-0 flex flex-row z-30 w-full h-full bg-black">
//             <button className="absolute top-2 right-2" onClick={onClose}>X</button>
//             <section>
//                 <img src={cert} alt="certificate" />
//             </section>
//             <section>
//                 ggggggggggggggggggggggggggggggggggggggggggggg
//             </section>

//         </Main>
//     )
// }
 
// export default DetailedPopup;

import React,{useEffect} from "react";
import cert from "/images/certify.jpg";
import { ImCross } from "react-icons/im";

const DetailedPopup = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen)    document.body.style.overflow = 'hidden';
    else   document.body.style.overflow ='';
    
    // Clean up on unmount
    return () =>  document.body.style.overflow = '';
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed  w-full h-full top-4 bottom-4 right-10 left-10  flex flex-row items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="relative w-full  h-28 p-6 bg-white rounded-lg shadow-lg">
        <button className="absolute top-2 right-2 text-xl" onClick={onClose}>
        <ImCross />
        </button>
        <section>
          <img src={cert} alt="certificate" className="w-full h-auto rounded" />
        </section>
        <section className="mt-4">
          Full certificate description or any additional content here.
        </section>
      </div>
    </div>
  );
};

export default DetailedPopup;
