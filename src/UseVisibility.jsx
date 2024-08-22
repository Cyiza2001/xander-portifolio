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

    return isVisible;

}

export default UseVisibility