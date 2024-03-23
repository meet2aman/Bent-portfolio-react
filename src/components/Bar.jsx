import React from "react";

const Bar = ({ name, desc }) => {
  return (
    <div className="w-full h-[30%] py-[20px] lg:flex justify-between items-center md:gap-8 lg:gap-0 px-[10px] md:px-[40px] lg:px-[50px] xl:px-[70px]">
      <h1 className="max-lg:text-[60px] lg:text-[110px] xl:text-[140px] w-[50%] max-lg:font-[600] lg:font-[700] tracking-tight capatalize leading-none">
        {name}
      </h1>
      <div className="flex lg:w-[50%] flex-col text-slate-700 text-[30px] font-[500]">
        <p className="lg:pr-[20px] leading-[25px] pb-4 text-[16px] lg:text-[20px] tracking-wide">
          {desc}
        </p>
        <div className="flex justify-start gap-6 text-white !w-auto lg:w-[40%]">
          <button className="bg-gray-900 px-4 py-1 cursor-pointer rounded-full text-[10px]">
            Digital Design
          </button>
          <div className="bg-gray-900 px-4 py-2 cursor-pointer rounded-full text-[10px]">
            2024
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bar;
