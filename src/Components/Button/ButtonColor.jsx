import { useEffect, useState } from "react";

const ButtonColor = () => {
    const colors = [ "#F0592A","#019267", "#e86b50", "#d8ab49", "#0aaec8", "#b759f1"]; 
    const [currentColor, setCurrentColor] = useState(colors[0]);
  
    useEffect(() => {
      const colorInterval = setInterval(() => {
        setCurrentColor((prevColor) => {
          const nextIndex = (colors.indexOf(prevColor) + 1) % colors.length;
          return colors[nextIndex];
        });
      }, 2000); // Change color every 2 seconds
  
      return () => clearInterval(colorInterval); // Cleanup on component unmount
    }, [colors]);

    return [currentColor]
};

export default ButtonColor;