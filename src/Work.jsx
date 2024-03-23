import React from "react";
import Image1 from "./components/Image-1";
import Bar from "./components/Bar";
import Connect from "./components/Connect";
import Navbar from "./components/Navbar";
import { Link } from "react-router-dom";
const Work = () => {
  return (
    <main>
      <Navbar />
      <div className=" py-[30px] md:px-[60px] max-md:px-[10px] ">
        <h1 className="text-[100px] md:text-[140px] lg:text-[140px] font-[600] leading-none">
          Work
        </h1>
        <div className="flex justify-between items-end">
          <h2 className="text-[38px] md:text-[60px] lg:w-1/2 leading-[35px] md:leading-[50px] font-[500]">
            Experience Innovative Design Solutions and Concepts
          </h2>
          <div className="hidden lg:flex text-[30px] justify-center items-center">
            <i className="ri-arrow-right-down-line mr-2"></i>
            <h3>Explore</h3>
          </div>
        </div>
      </div>
      <Link to={`/work/camera`}>
        <Image1
          url={
            "https://assets-global.website-files.com/64589fb989b2b3e8783db8c8/645cad0d8364135d4087b9c8_project-01.webp"
          }
        />
        <Bar
          name="Camera"
          desc="   A cutting-edge digital platform designed to revolutionize the way
            people interact with technology."
        />
      </Link>

      <Link to={`/work/noise`}>
        <Image1
          url={
            "https://assets-global.website-files.com/64589fb989b2b3e8783db8c8/645cad129d3885d86c115c7f_project-02.webp"
          }
        />
        <Bar
          name="Noise"
          desc="   A cutting-edge digital platform designed to revolutionize the way
            people interact with technology."
        />
      </Link>
      <Link to={`/work/robot`}>
        <Image1
          url={
            "https://assets-global.website-files.com/64589fb989b2b3e8783db8c8/645cad1988b7ca338942d0b3_project-03.webp"
          }
        />
        <Bar
          name="Robot"
          desc="   A cutting-edge digital platform designed to revolutionize the way
            people interact with technology."
        />
      </Link>
      <Link to={`/work/motion`}>
        <Image1
          url={
            "https://assets-global.website-files.com/64589fb989b2b3e8783db8c8/645cad1e0db9bc9648a14d26_project-04.webp"
          }
        />
        <Bar
          name="Motion"
          desc="   A cutting-edge digital platform designed to revolutionize the way
            people interact with technology."
        />
      </Link>
      <Connect className="border-t-2 border-black"/>
    </main>
  );
};

export default Work;
