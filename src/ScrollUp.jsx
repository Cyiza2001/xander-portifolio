
// import React, { useEffect, useState } from 'react';
// import { FaArrowUp } from 'react-icons/fa';

// const ScrollUp = () => {
//     const [visible, setVisible] = useState(false);

//     const handleScroll = () =>  window.scrollY >100 ? setVisible(true) : setVisible(false);
    
//     useEffect(() => {
//         window.addEventListener('scroll', handleScroll);
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//     const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    

//     if (!visible) return null;

//     return (
//         <div
//             className="bg-blue-700 h-10 w-10 rounded-full fixed right-5 bottom-5 z-30 flex justify-center items-center hover:bg-blue-600 hover:cursor-pointer"
//             onClick={scrollToTop}
//         >
//             <FaArrowUp className="text-white" />
//         </div>
//     );
// };

// export default ScrollUp;


import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollUp = ({ scrollContainer = window }) => {
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    // Check if `scrollContainer` is window or a ref and get the correct scrollTop
    const scrollTop = scrollContainer === window 
      ? window.scrollY 
      : scrollContainer.current?.scrollTop || 0;

    setVisible(scrollTop > 100);
  };

  useEffect(() => {
    const target = scrollContainer === window ? window : scrollContainer.current;
    if (target) {
      target.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (target) {
        target.removeEventListener('scroll', handleScroll);
      }
    };
  }, [scrollContainer]);

  const scrollToTop = () => {
    if (scrollContainer === window) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (scrollContainer) {
      scrollContainer.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (!visible) return null;

  return (
    <div
      className="bg-blue-700 h-10 w-10 rounded-full fixed right-5 bottom-5 z-30 flex justify-center items-center hover:bg-blue-600 hover:cursor-pointer"
      onClick={scrollToTop}
    >
      <FaArrowUp className="text-white" />
    </div>
  );
};

export default ScrollUp;
