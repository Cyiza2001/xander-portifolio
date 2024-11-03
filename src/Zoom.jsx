import React, { useEffect } from "react";
import cert from "/images/certify.jpg";
import { ImCross } from "react-icons/im";

const DetailedPopup = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";

    // Clean up on unmount
    return () => (document.body.style.overflow = "");
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed  max-w-full h-[calc(100vh-4rem)] top-8 bottom-0 right-20 left-20  z-50  border-8 overflow-y-scroll overflow-hidden">
      <div className="relative flex flex-row align-middle h-full">
        <button
          className="absolute -top-2 -right-10 rounded-md text-xl bg-black p-2 hover:pointer hover:font-thin"
          onClick={onClose}
        >
          <ImCross className=" text-white font-semibold " />
        </button>
        <section className="w-2/3 h-full ">
          <img src={cert} alt="certificate" className="w-full h-full " />
        </section>
        <section className=" w-1/3 h-28 text-black">
          Full certificate description or any additional content here.
        </section>
      </div>
    </div>
  );
};

export default DetailedPopup;
