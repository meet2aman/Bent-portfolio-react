import React from "react";

const Clients = () => {
  return (
    <div className="w-full lg:flex justify-between lg:py-[25px] py-10 md:px-[60px] px-[10px]  border-y-2 border-black">
      <div className="flex justify-between lg:w-[40%] text-[20px] md:text-[20px] max-lg:text-[20px] lg:text-[23px] lg:pr-16 max-lg:mb-10">
        <h2 className=" font-[500]">(My Clients)</h2>
        <i className="ri-arrow-right-down-line"></i>
      </div>

      <div className="lg:w-[60%] lg:pl-16 flex flex-col justify-between lg:border-l-2 border-black">
        <div className="md:flex border-b-2 border-black pb-[2rem]">
          <div className="pb-10 md:border-r-2 md:pr-10 max-md:border-b-2 border-black md:w-[50%]">
            <h2 className="md:text-[35px] lg:text-[35px] xl:text-[30px] text-[30px] md:leading-[32px] leading-[30px] font-[600] pb-6">
              Exceptional digital design and user experience.
            </h2>
            <p className="font-[500] leading-[20px] text-[16px] text-slate-700 pb-8">
              Bent's digital design skills are unmatched. He transformed our
              website into a beautiful and functional work of art that exceeded
              our expectations.
            </p>
            <div className="flex items-center gap-4">
              <img
                className=" h-[40px] w-[40px] object-cover rounded-full"
                src="https://assets-global.website-files.com/64589fb989b2b33c593db89d/645df9b1ddb30689f693619c_author-testimonial-01.webp"
                alt="client"
              />
              <div className="flex flex-col leading-none gap-1">
                <p className=" text-[15px] lg:text-[14px] font-semibold">
                  Jane Doe
                </p>
                <p className="text-[12px] lg:text-[14px] tracking-wide">
                  Art Inc.
                </p>
              </div>
            </div>
          </div>
          <div className="md:pl-12 lg:pl-16 max-md:pt-10 md:w-[50%]">
            <h2 className="md:text-[35px] lg:text-[35px] xl:text-[30px] text-[30px]  md:leading-[30px] leading-[30px] font-[600] pb-6">
              Art direction that captured our essence.
            </h2>
            <p className="font-[500] leading-[20px] text-[16px] text-slate-700 pb-8">
              Working with Bent on art direction was a pleasure. He listened to
              our ideas and brought his creativity to the table, resulting in a
              stunning visual brand identity.
            </p>
            <div className="flex items-center gap-4">
              <img
                src="https://assets-global.website-files.com/64589fb989b2b33c593db89d/645df9b75d697295b1a21b75_author-testimonial-02.webp"
                alt="client"
                className="w-[40px] h-[40px] object-cover rounded-full"
              />
              <div className="flex flex-col leading-none gap-1">
                <p className=" text-[15px] lg:text-[14px] font-semibold">
                  Jane Johnson
                </p>
                <p className="text-[12px] lg:text-[14px] tracking-wide">
                  TechStart LLC
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex md:pt-[2rem] max-md:pt-10">
          <div className="pb-10 md:w-[50%] md:pr-10 md:border-r-2 border-black max-md:border-b-2">
            <h2 className="md:text-[35px] lg:text-[35px] xl:text-[30px] text-[30px]  md:leading-[30px] leading-[30px] font-[600] pb-6">
              Bent's interaction design expertise delivered.
            </h2>
            <p className="font-[500] leading-[20px] text-[16px] text-slate-700 pb-8">
              Bent's interaction design made our app user-friendly and
              intuitive. His creativity and attention to detail resulted in a
              product that exceeded our expectations
            </p>
            <div className="flex items-center gap-4">
              <img
                src="https://assets-global.website-files.com/64589fb989b2b33c593db89d/645df9b9d9ff6c360ce1b9af_author-testimonial-03.webp"
                alt="client"
                className=" w-[40px] h-[40px] object-cover rounded-full"
              />
              <div className="flex flex-col leading-none gap-1">
                <p className=" text-[15px] lg:text-[14px] font-semibold">
                  Sarah Thompson
                </p>
                <p className="text-[12px] lg:text-[14px] tracking-wide">
                  Creative Solutions
                </p>
              </div>
            </div>
          </div>
          <div className="md:pl-12 lg:pl-16 max-md:pt-10 md:w-[50%]">
            <h2 className="md:text-[35px] lg:text-[35px] xl:text-[30px] text-[30px]  md:leading-[30px] leading-[30px] font-[600] pb-6">
              Captivating motion design that brought our brand to life.
            </h2>
            <p className="font-[500] leading-[20px] text-[16px] text-slate-700 pb-8">
              Bent's motion design is exceptional. He brought our brand to life
              with stunning animations that captivated our audience.
            </p>
            <div className="flex items-center gap-4">
              <img
                src="https://assets-global.website-files.com/64589fb989b2b33c593db89d/645df9bb53c544e081ce78e2_author-testimonial-04.webp"
                alt="client"
                className="w-[40px] h-[40px] object-cover rounded-full"
              />
              <div className="flex flex-col leading-none gap-1">
                <p className=" text-[15px] lg:text-[14px] font-semibold">
                  Jane Johnson
                </p>
                <p className="text-[12px] lg:text-[14px] tracking-wide">
                  TechStart LLC
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
