import React from "react";

const Work = () => {
  return (
    <div className="h-45%  md:flex max-lg:flex-col max-lg:w-full border-b-2 border-black px-[10px] md:px-[40px] lg:px-[50px] lg:py-[25px] py-[20px]">
      <div className="flex justify-between w-full lg:w-[40%] text-[20px] md:text-[23px] lg:border-r-2 border-black lg:px-[50px] lg:pr-10">
        <h2 className="capatalize font-[500]">(What I do)</h2>
        <i className="ri-arrow-right-down-line "></i>
      </div>

      <div className="lg:w-[60%] w-full lg:pl-10 lg:px-[50px]">
        {/* left section */}
        <div className="md:flex justify-between border-b-2 border-black py-[25px]">
          <div className="md:pr-[20px] md:w-[50%] w-full max-md:pb-10 max-md:border-b-2 border-black">
            <h2 className="text-[30px] md:text-[30px] leading-none  lg:leading-[45px] font-[600] mb-6">
              Digital Design
            </h2>
            <p className="font-[400] lg:font-[500] leading-[22px] lg:leading-[20px] md:leading-[20px] tracking-wide lg:text-[16px] md:text-[20px] text-[16px] text-slate-700">
              I create stunning digital designs that engage and inspire your
              audience. Let me bring your brand to life with my skills
            </p>
          </div>
          <div className="md:border-l-2 md:w-[50%]  border-black md:pl-[20px] max-md:pt-7">
            <h2 className="text-[30px] md:text-[30px] lg:text-[30px] font-[600] mb-6 leading-none  lg:leading-[45px]">
              Art Direction
            </h2>
            <p className="font-[400] lg:font-[500] leading-[22px] lg:leading-[20px] md:leading-[20px] lg:text-[16px] md:text-[20px] text-[16px] text-slate-700 tracking-wide">
              My art direction expertise ensures that your project is on brand,
              on message, and visually stunning. Let's tell your story together.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:flex justify-between py-[25px]">
          <div className="lg:pr-[20px] md:w-[50%] max-md:border-b-2 border-black max-md:pb-10">
            <h2 className="text-[30px] md:text-[30px] lg:text-[30px] font-[600] mb-6 leading-none  lg:leading-[45px]">
              Interaction Design
            </h2>
            <p className="font-[400] lg:font-[500] leading-[22px] lg:leading-[20px] md:leading-[20px] lg:text-[16px] md:text-[18px] text-[16px] tracking-wide text-slate-700">
              I specialize in designing intuitive user experiences that are both
              functional and beautiful.
            </p>
          </div>
          <div className="md:border-l-2 md:w-[50%] border-black md:pl-[20px] max-md:pt-7">
            <h2 className="text-[30px] md:text-[30px] lg:text-[30px] font-[600] mb-6 leading-none  lg:leading-[45px]">
              Motion Design
            </h2>
            <p className="font-[400] tracking-wide leading-[22px] lg:font-[500] lg:leading-[20px] md:leading-[20px] lg:text-[16px] md:text-[20px] text-[16px] text-slate-700">
              From animated logos to explainer videos, I bring your message to
              life with visually stunning motion design.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
