import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="absolute py-4 mx-auto w-full text-white bg-black dark:bg-gray-800">
      <div className="container flex justify-center items-center mx-auto">
        <p className="mr-2 text-sm">
          &lt; Developed by <b>Jayant Ghadge</b> /&gt;
        </p>
        <a
          href="https://github.com/jayantghadge"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-500"
        >
          <FaGithub className="mx-2 w-6 h-6" />
        </a>
        <a
          href="https://in.linkedin.com/in/jayant-ghadge-700739181"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-500"
        >
          <FaLinkedin className="mx-2 w-6 h-6" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
