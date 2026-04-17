import React from "react";
import "./header/Nav.jsx";

const Footer = () => {
  return (
    <div className=" w-full bg-black/20 py-5 flex flex-col md:flex-row gap-3 md:gap-0 items-center justify-center md:justify-evenly">
      <div className="text-3xl bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent ">
        <h2 className="logo tracking-wide">Portfolio</h2>
      </div>
      <div className="text-sm md:text-md text-gray-400">
        <p>
          &copy; 2026{" "}
          <a href="mailto:ahmed.codex1@gmail.com" className="text-blue-800">
            Ahmed Mohamed
          </a>
          . All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
