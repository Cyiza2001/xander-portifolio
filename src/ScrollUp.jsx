
import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollUp = () => {
    const [visible, setVisible] = useState(false);

    const handleScroll = () =>  window.scrollY > 60 ? setVisible(true) : setVisible(false);
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    

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
