import React from "react";
import Navbar from "./components/Navbar";

const About = () => {
  const date = new Date();
  return (
    <main>
      <Navbar />
      <div className="md:flex justify-between">
        <div className="md:w-[50%] h-full md:fixed top-0 bottom-0 left-0">
          <img
            src="https://assets-global.website-files.com/64589fb989b2b33c593db89d/645f70593b53563168a125ac_about-p-1080.webp"
            alt="about-pic"
            className="md:h-full w-full object-cover"
          />
        </div>
        <div
          data-scroll-container
          className="text-5xl md:w-[50%] px-[10px] md:px-[20px] lg:px-[30px] md:absolute right-0 top-[100px] text-black overflow-y-auto"
        >
          <h2 className="max-sm:pt-10 text-[20px] md:text-[30px]">
            (About Me)
          </h2>
          <h1
            data-scroll-speed="1.5"
            className="max-xl:text-[120px] xl:text-[116px]  lg:leading-[100px] max-lg:text-[70px] max-sm:text-[65px] max-lg:font-[700] font-[600] lg:mb-10 max-lg:mb-5"
          >
            Aman Kushwaha
          </h1>
          <p className="text-[30px] md:text-[40px] lg:text-[45px]">
            A Berlin-based Digital Designer and Art Director with a Passion for
            Captivating Visual Experiences.
          </p>
          <p className="text-[18px] font-[400] leading-[25px] mt-10 text-slate-700">
            As a digital designer and art director, I am passionate about
            creating captivating visual experiences that leave a lasting
            impression. Based in Berlin, I draw inspiration from the city's
            vibrant energy and dynamic creative scene. With years of experience
            in the industry, I have honed my skills in digital design, art
            direction, interaction design, and motion design.
          </p>
          <p className="text-[18px] font-[400] leading-[25px] mt-10 text-slate-700 border-b-2 border-black pb-10">
            As a digital designer and art director, I am passionate about
            creating captivating visual experiences that leave a lasting
            impression. Based in Berlin, I draw inspiration from the city's
            vibrant energy and dynamic creative scene. With years of experience
            in the industry, I have honed my skills in digital design, art
            direction, interaction design, and motion design.
          </p>

          <div>
            <h2 className="lg:text-[80px] max-lg:text-[75px] max-sm:text-[60px] font-[600] py-10">
              Refrences
            </h2>
            <p className="text-[30px] md:text-[40px] lg:text-[45px] lg:font-[600]">
              Trusted by Leading Brands: A Look at the Companies That Have
              Benefited from Bent Lindberg's Expertise.
            </p>
            <div className="lg:flex justify-between py-10 text-2xl lg:text-[25px] text-slate-800 border-b-2 border-black">
              <div className="mb-5">
                <div className="flex items-center gap-10 pb-4">
                  <i className="ri-arrow-right-down-line"></i>
                  <h3>Amazon</h3>
                </div>
                <div className="flex items-center gap-10 pb-4">
                  <i className="ri-arrow-right-down-line"></i>
                  <h3>Google</h3>
                </div>
                <div className="flex items-center gap-10">
                  <i className="ri-arrow-right-down-line"></i>
                  <h3>Microsoft</h3>
                </div>
              </div>
              <div className="mb-5">
                <div className="flex items-center gap-10 pb-4">
                  <i className="ri-arrow-right-down-line"></i>
                  <h3>Audi</h3>
                </div>
                <div className="flex items-center gap-10 pb-4">
                  <i className="ri-arrow-right-down-line"></i>
                  <h3>Tesla</h3>
                </div>
                <div className="flex items-center gap-10">
                  <i className="ri-arrow-right-down-line"></i>
                  <h3>Nike</h3>
                </div>
              </div>
              <div className="">
                <div className="flex items-center gap-10 pb-4">
                  <i className="ri-arrow-right-down-line"></i>
                  <h3>Honda</h3>
                </div>
                <div className="flex items-center gap-10 pb-4">
                  <i className="ri-arrow-right-down-line"></i>
                  <h3>Apple</h3>
                </div>
                <div className="flex items-center gap-10">
                  <i className="ri-arrow-right-down-line"></i>
                  <h3>Atlassian</h3>
                </div>
              </div>
            </div>
            <h2 className="lg:text-[80px] max-lg:text-[75px] max-sm:text-[60px] font-[600] py-10">
              Awards
            </h2>
            <p className="text-[30px] md:text-[40px] lg:text-[45px] lg:font-[600] pb-12">
              Trusted by Leading Brands: A Look at the Companies That Have
              Benefited from Bent Lindberg's Expertise.
            </p>
            <div className="flex justify-between text-[25px] lg:py-5 py-4 border-y-2 border-black">
              <h3>CSS SOTY</h3>
              <h3>({date.getFullYear()})</h3>
            </div>
            <div className="flex justify-between text-[25px] lg:py-5 py-4 border-b-2 border-black">
              <h3>Awwwards SOTD</h3>
              <h3>({date.getFullYear()})</h3>
            </div>
            <div className="flex justify-between text-[25px] lg:py-5 py-4 border-b-2 border-black">
              <h3>Awwwards SOTD</h3>
              <h3>({date.getFullYear()})</h3>
            </div>
            <div className="flex justify-between text-[25px] lg:py-5 py-4 border-b-2 border-black">
              <h3>CSS SOTD</h3>
              <h3>({date.getFullYear()})</h3>
            </div>
            <div className="flex justify-between text-[25px] lg:py-5 py-4">
              <h3>Awwwards SOTY</h3>
              <h3>({date.getFullYear()})</h3>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
