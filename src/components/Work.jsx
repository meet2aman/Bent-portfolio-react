import React from "react";

const Work = () => {
  return (
    <div className="h-45% md:flex max-lg:flex-col max-lg:w-full max-sm:w-[878px] border-b-2 border-black px-[50px] py-[50px]">
      <div className="flex justify-between w-full lg:w-[40%] text-[50px] md:text-[60px] lg:text-[40px] lg:border-r-2 border-black lg:px-[50px] lg:pr-10">
        <h2 className="capatalize font-[600]">(What I do)</h2>
        <i className="ri-arrow-right-down-line "></i>
      </div>

      <div className="lg:w-[60%] w-full lg:pl-10 lg:px-[50px] max-sm:pl-10">
        {/* left section */}
        <div className="md:flex justify-between border-b-2 border-black py-[60px]">
          <div className="md:pr-[20px] md:w-[50%] w-full max-md:pb-10 max-md:border-b-2 border-black">
            <h2 className="text-[70px] md:text-[70px] lg:text-[44px] leading-none md:leading-[70px] lg:leading-[60px] font-[600] mb-6">
              Digital Design
            </h2>
            <p className="font-[500] lg:leading-[29px] md:leading-[80px] lg:text-[18px] md:text-[50px] text-[50px] text-slate-500">
              I create stunning digital designs that engage and inspire your
              audience. Let me bring your brand to life with my skills
            </p>
          </div>
          <div className="md:border-l-2 md:w-[50%]  border-black md:pl-[20px] max-md:pt-7">
            <h2 className="text-[70px] md:text-[70px] lg:text-[44px] font-[600] mb-6 leading-none md:leading-[70px] lg:leading-[60px]">
              Art Direction
            </h2>
            <p className="font-[500] lg:leading-[29px] md:leading-[80px] lg:text-[18px] md:text-[50px] text-[50px] text-slate-500">
              My art direction expertise ensures that your project is on brand,
              on message, and visually stunning. Let's tell your story together.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:flex justify-between py-[50px]">
          <div className="lg:pr-[20px] md:w-[50%] max-md:border-b-2 border-black max-md:pb-10">
            <h2 className="text-[70px] md:text-[70px] lg:text-[44px] font-[600] mb-6 leading-none md:leading-[70px] lg:leading-[60px]">
              Interaction Design
            </h2>
            <p className="font-[500] lg:leading-[29px] md:leading-[80px] lg:text-[18px] md:text-[50px] text-[50px] text-slate-500">
              I specialize in designing intuitive user experiences that are both
              functional and beautiful.
            </p>
          </div>
          <div className="md:border-l-2 md:w-[50%] border-black md:pl-[20px] max-md:pt-7">
            <h2 className="text-[70px] md:text-[70px] lg:text-[44px] font-[600] mb-6 leading-none md:leading-[70px] lg:leading-[60px]">
              Motion Design
            </h2>
            <p className="font-[500] lg:leading-[29px] md:leading-[80px] lg:text-[18px] md:text-[50px] text-[50px] text-slate-500">
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
