import React from "react";
import heroImg from "../assets/images/image-mockups.png";
import Button from "./button";

const Intro = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row bg-Very-Light-Gray  overflow-hidden md:gap-20 gap-10">
      {/* text */}
      <div className="flex flex-col md:mt-[180px] md:text-left text-center md:pl-20 pl-5 md:max-w-[40%] max-w-full ">
        <h1 className="font-[400] leading-[1.3] md:text-[44px] text-4xl	max-w-full ">
          Voluntariado
        </h1>
        <p className="font-[300] text-base mt-[10px] leading-7 md:max-w-[400px] max-w-full text-Grayish-Blue">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </p>
        <Button className="mt-10 md:mx-[5px] mx-auto md:mb-[0px] mb-[100px] " />
      </div>

      {/* image */}

    </section>
  );
};

export default Intro;
