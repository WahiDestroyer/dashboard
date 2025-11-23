import React from 'react'
import Toggle from "../Components/ui/Toggle";


const Navbar = () => {
   const handleTheme = (isLight) => {
    // hook into your theme switcher here
    console.log("light mode?", isLight);
  };

  const handleAction = () => {
    // do whatever your square icon should trigger
    console.log("action click");
  };
  return (
    <div>
      
    </div>
  )
}

export default Navbar
