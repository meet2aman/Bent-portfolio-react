import React from "react";

const Bar = ({ name, desc }) => {
  return (
    <div className="w-full h-[30%] max-sm:w-[878px] py-[20px] lg:flex justify-between items-center md:gap-8 lg:gap-0 px-[50px] xl:px-[70px]">
      <h1 className="max-lg:text-[100px] lg:text-[110px] xl:text-[140px] w-[50%] max-lg:font-[600] lg:font-[700] tracking-tight capatalize ">
        {name}
      </h1>
      <div className="flex lg:w-[50%] flex-col md:gap-4 lg:gap-10 text-slate-500 text-[30px] font-[500]">
        <p className="lg:pr-[20px] leading-[32px] max-lg:pb-8">{desc}</p>
        <div className="flex justify-start gap-6 text-white !w-auto lg:w-[40%]">
          <button className="bg-gray-900 px-4 py-2 cursor-pointer rounded-full text-[17px]">
            Digital Design
          </button>
          <div className="bg-gray-900 px-4 py-2 cursor-pointer rounded-full text-[17px]">
            2024
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bar;
