import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Find me on</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a href="https://github.com/ednaakpene">
              <FaGithub />
            </a>
          </span>

          <span className="bannerIcon">
            <a href="https://www.linkedin.com/in/ednaametefe/">
              <FaLinkedinIn />
            </a>
          </span>
        </div>
      </div>
    
     
    </div>
  );
};

export default Media;
