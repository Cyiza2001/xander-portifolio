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
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow ='';
    
    // Clean up on unmount
    return () =>  document.body.style.overflow = '';
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed  max-w-full h-full top-8 bottom-0 right-20 left-20  z-50 bg-black border-8">
      <div className="relative flex flex-row align-middle ">
        <button className="absolute top-2 right-2 text-xl" onClick={onClose}>
        <ImCross />
        </button>
        <section className="w-2/3 h-auto">
          <img src={cert} alt="certificate"  />
        </section>
        <section className=" w-1/3 h-28 text-white">
          Full certificate description or any additional content here.
        </section>
      </div>
    </div>
  );
};

export default DetailedPopup;
