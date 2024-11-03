import React, { useEffect, useRef } from "react";
import cert from "/images/certify.jpg";
import { ImCross } from "react-icons/im";

const DetailedPopup = ({ isOpen, onClose }) => {
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
          className="fixed inset-0 bg-black bg-opacity-75 "
          aria-hidden="true"
          onClick={onClose}
        ></div>

        <div className="z-50 w-full mx-16 max-h-[90vh] p-6 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
          <button
            className="absolute top-4 right-4 text-s font-thin text-white hover:text-white/90"
            onClick={onClose}
          >
            <ImCross />
          </button>

          <div className="flex flex-col md:flex-row overflow-auto h-full">
            <div className="w-full md:w-2/3 h-auto max-h-[80vh] overflow-y-auto">
              <img
                src={cert}
                alt="certificate"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="w-full md:w-1/3 mt-4 md:mt-0  text-black bg-black">
              <h3 className="text-lg font-semibold mb-2">
                Certificate Description
              </h3>
              <p className="text-sm text-gray-700">
                Full certificate description or any additional content here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedPopup;
