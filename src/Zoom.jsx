import React, { useEffect, useRef } from "react";
import cert from "/images/certify.jpg";
import { ImCross } from "react-icons/im";

const DetailedPopup = ({ isOpen, onClose }) => {

  const details =[ 
    {title:"MODERN JAVASCRIPT FUNDAMENTALS", id:"n578jy6lu4", certifier:"Rwanda ICT chamber", auth:"https://academy.ihuzo.rw/certificates/n578jy61u4", description:"This certificate acknowledges a solid understanding of core JavaScript concepts and modern features essential for today's web development. It covers fundamental concepts such as variable scope, control flow, and asynchronous programming, as well as ES6+ features including arrow functions, destructuring, modules, and promises. With this certificate, the holder demonstrates proficiency in building scalable, interactive, and dynamic web applications using JavaScript’s latest standards and best practices      ////////////      This certificate acknowledges a solid understanding of core JavaScript concepts and modern features essential for today's web development. It covers fundamental concepts such as variable scope, control flow, and asynchronous programming, as well as ES6+ features including arrow functions, destructuring, modules, and promises. With this certificate, the holder demonstrates proficiency in building scalable, interactive, and dynamic web applications using JavaScript’s latest standards and best practices"


  }]
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      if (modalRef.current) {
        modalRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="relative">
      <div
        ref={modalRef}
        className="fixed inset-0 z-50 flex items-center justify-center"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div
          className="fixed inset-0 bg-black bg-opacity-90 "
          aria-hidden="true"
          onClick={onClose}
        ></div>

        <div className="z-50 w-full mx-16 max-h-[90vh] px-0  bg-white rounded-lg shadow-xl overflow-hidden flex flex-col">
          <button
            className="absolute top-4 right-4 text-s font-thin text-white hover:text-white/90"
            onClick={onClose}
          >
            <ImCross />
          </button>

          <div className="flex flex-col md:flex-row pt-6  h-full">
            <div className="w-full md:w-2/3 h-auto max-h-[80vh]    ">
              <img
                src={cert}
                alt="certificate"
                className="w-full h-full object-contain"
              />
            </div>
            {details.map((el)=>{
              return (
                <div className="w-full md:w-1/3 mt-4 md:mt-0  text-black overflow-auto overflow-y-auto ">
                 
                  <div className="rounded-sm shadow-lg py-10 mb-5">

                  <h1 className="text-2xl font-bold mb-2 ml-6">
                    {el.title }
                  </h1>
                  <div className=" max-w-full mx-6 bg-gray-400 opacity-10" style={{height:"1px"}}></div>
                  <p className="ml-6 mt-4"><strong className="font-bold text-sm">CERTIFICATE ID:</strong> {el.id} </p>
                  <p className="ml-6 mt-4"><strong className="font-bold text-sm">VERIFY AUTHENTICITY:</strong> <a href={el.auth} className="text-blue-700 font-bold">here</a> </p>
                  <p className="ml-6 mt-4"><strong className="font-bold text-sm">Certfied by:</strong> {el.certifier} </p>
                  </div>
                  <div>
                    <h1 className="font-bold">Description</h1>
                  <p className="text-sm text-gray-700 ">
                   {el.description}
                   </p>
                  </div>
                </div>
              )
            })}
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedPopup;
