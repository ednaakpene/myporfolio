import React from "react";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[65%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Edna Akpene Ametefe</h3>
        <p className="text-lg font-normal text-gray-400">
          Full Stack Developer
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Address: <span className="text-lightText">Accra, Ghana</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone:{" "}
          <span className="text-lightText">+233 557366698 or +233 505541682</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">edvalerie18@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
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
          {/* <span className="bannerIcon">
           <a href="https://wa.me/+233557366698"> 
              <FaWhatsapp />
             </a> 
          </span> */}
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
