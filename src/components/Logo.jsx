import React from "react";

function Logo({ width = "100px" }) {
  return <div className="">
     <img
                src="/blog wirte logo.PNG" // Correct path for public folder
                className="mr-3 h-16 w-auto " // Increase height and auto width
                alt="Logo"
              />
  </div>;
}

export default Logo;
