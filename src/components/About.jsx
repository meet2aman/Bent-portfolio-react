import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div
      id="read-more"
      className="w-full flex sm:flex-col-reverse md:flex-row h-[45%] max-sm:flex-col-reverse max-md:gap-10 max-sm:w-[887px] justify-start md:px-[60px] px-[40px] py-[50px] border-b-2 border-black"
    >
      <h2 className="md:w-[64%] w-full max-sm:text-[100px] max-md:text-[80px]  md:text-[60px] lg:text-[100px] font-semibold max-md:leading-[85px] md:leading-[60px] lg:leading-[95px] md:pr-[40px]">
        As a digital designer, I focus on producing top-notch and impactful
        digital experiences.
      </h2>
      <div className="about-right md:w-40% max-sm:w-full flex flex-col justify-between items-start md:border-l-2 border-black md:pl-[50px]">
        <Link to="./about/about.html">
          <h2 className="max-sm:text-[70px] sm:text-[50px] md:text-[30px] lg:text-[40px] block md:font-semibold">
            (About Me)
          </h2>
        </Link>
        <div className="flex justify-center items-center max-sm:text-6xl text-3xl gap-4 max-sm:p-2 text-white">
          <i className="ri-instagram-line bg-black rounded-full max-sm:px-5 max-sm:py-5 py-4 px-5 cursor-pointer transion-all hover:bg-orange-500"></i>
          <i className="ri-facebook-line bg-black rounded-full max-sm:px-5 max-sm:py-5 py-4 px-5 cursor-pointer transion-all hover:bg-blue-500"></i>
          <i className="ri-dribbble-line bg-black rounded-full max-sm:px-5 max-sm:py-5 py-4 px-5 cursor-pointer transion-all hover:bg-pink-500"></i>
        </div>
      </div>
    </div>
  );
};

export default About;
