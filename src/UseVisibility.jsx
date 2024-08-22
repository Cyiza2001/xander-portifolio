import { useState, useEffect } from "react";


const UseVisibility = (ref)=>{
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting)  setIsVisible(true)
          });
        },
        { threshold: 0.2 }
      );
  
      if (ref.current) observer.observe(ref.current);
      
    }, [ref]);
    const getStyles = () =>  ( {
        opacity: isVisible ? '1' : '0',
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'transform 2s ease, opacity 2s ease',
});

    return {isVisible, getStyles};

}

export default UseVisibility