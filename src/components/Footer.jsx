import React from "react";

import Logo from "../assets/images/logo.svg";
import { IoLogoFacebook } from "react-icons/io";
import { FaSquareYoutube } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-Dark-Blue text-white flex md:flex-row flex-col  items-center justify-between px-[40px] py-[30px]">
      <div className="flex md:gap-20 gap-4 md:flex-row flex-col">
        <div className="flex flex-col gap-8">
          <div className="invert">
            <img src={Logo} alt="" />
          </div>
          <div className="flex gap-2 text-[22px]">
            <div className="cursor-pointer ">
              <IoLogoFacebook className=" text-white hover:text-Lime-Green" />
            </div>
            <div className="cursor-pointer ">
              <FaSquareYoutube className="hover:text-Lime-Green" />
            </div>
            <div className="cursor-pointer ">
              <FaTwitter className=" text-white hover:text-Lime-Green" />
            </div>
            <div className="cursor-pointer ">
              <FaPinterest className=" text-white hover:text-Lime-Green" />
            </div>
            <div className="cursor-pointer ">
              <FaInstagram className=" text-white hover:text-Lime-Green" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 ">
          <a href="/" className="hover:text-Lime-Green">
            About
          </a>
          <a href="/" className="hover:text-Lime-Green">
            Contact
          </a>
          <a href="/" className="hover:text-Lime-Green">
            Blog
          </a>
        </div>
        <div className="flex flex-col items-center gap-4 ">
          <a href="/" className="hover:text-Lime-Green">
            Careers
          </a>
          <a href="/" className="hover:text-Lime-Green">
            Support
          </a>
          <a href="/" className="hover:text-Lime-Green">
            Privacy Policy
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center gap-3">
        <p className="text-Grayish-Blue text-[14px] mt-[10px]">
          &copy; Volun. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
