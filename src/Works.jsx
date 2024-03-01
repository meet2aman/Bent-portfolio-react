import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "./components/Navbar";
import Image1 from "./components/Image-1";
import Connect from "./components/Connect";
import { workData } from "./lib/data";
const Works = () => {
  let { workId } = useParams();
  const [currentWork, setCurrentWork] = useState(
    workData.find((work) => work.id === workId)
  );
  const nextWorkIndex =
    (workData.findIndex((work) => work.id === workId) + 1) % workData.length;
  const nextWork = workData[nextWorkIndex];
  const handleNextWorkClick = () => {
    setCurrentWork(nextWork);
  };
  return (
    <>
      <main>
        <Navbar />
        <div className="px-[50px]">
          <h1 className="text-[150px] font-[600] pt-[40px] leading-none">
            {currentWork.title}
          </h1>
          <div className="flex justify-between items-start py-[40px]">
            <h2 className="w-[70%] text-[60px] font-[500] leading-none">
              {currentWork.subTitle}
            </h2>
            <div className="w-[30%] text-[20px] font-[500]">
              <div className="flex justify-between items-center border-b-2 border-black py-3">
                <h3>(Client)</h3>
                <h1>{currentWork.client}</h1>
              </div>
              <div className="flex justify-between items-center border-b-2 border-black py-3">
                <h3>(Year)</h3>
                <h1>2024</h1>
              </div>
              <div className="flex justify-between items-center border-b-2 border-black py-3">
                <h3>(Website)</h3>
                <Link className="underline-offset-1">aman.vercel</Link>
              </div>
              <div className="flex justify-between items-center my-3">
                <h3>(Service)</h3>
                <button className="py-2 px-3 capitalize bg-slate-800 rounded-full text-white text-[15px]">
                  Digital design
                </button>
              </div>
            </div>
          </div>
        </div>
        <Image1 url={currentWork.image1} />
        <section className="grid grid-cols-3 p-[40px]">
          <div className="col-span-1 leading-none flex justify-between items-start text-[30px] border-r-2 border-black pr-12 sticky top-0">
            <h2>(Details)</h2>
            <i className="ri-arrow-right-down-line"></i>
          </div>
          <div className="col-span-2 px-12 overflow-auto">
            <div className="border-b-2 border-black pb-20">
              <h3 className="text-[20px] font-[500] tracking-wide leading-none">
                (Challenge)
              </h3>
              <h1 className="text-[50px] font-[500]">
                Complex Design Challenges
              </h1>
              <p className="text-[22px] tracking-wide text-gray-600">
                Developing the project was a challenging task, and I encountered
                several design obstacles along the way. I had to create an
                intuitive user interface that would work seamlessly with
                advanced features while maintaining a balance between aesthetics
                and functionality. Additionally, I had to ensure that the
                platform was scalable, secure, and user-friendly.
              </p>
            </div>
            <div className="py-20 border-b-2 border-black">
              <h3 className="text-[20px] tracking-wide leading-none font-[500]">
                (Goal)
              </h3>
              <h1 className="text-[50px] font-[500]">
                Enhance User Experience
              </h1>
              <p className="text-[22px] tracking-wide text-gray-600">
                My primary goal with this project was to design an innovative
                platform that could redefine the way people interact with
                technology. I wanted to create a product that was intuitive,
                responsive, and aesthetically pleasing while offering innovative
                features that would enhance the user experience.
              </p>
            </div>
            <div className="pt-20">
              <h3 className="text-[20px] tracking-wide leading-none font-[500]">
                (Result)
              </h3>
              <h1 className="text-[50px] font-[500]">
                Revolutionizing the Digital Landscape
              </h1>
              <p className="text-[22px] tracking-wide text-gray-600">
                The successful launch of this project has revolutionized the
                digital landscape. With my design, I have provided users with an
                unparalleled experience that surpasses all expectations. The
                platform is now scalable, secure, and user-friendly, and it has
                set a new standard for digital design. The feedback from users
                has been overwhelmingly positive, and I am thrilled to see the
                impact that my work has made in the industry.
              </p>
            </div>
          </div>
        </section>
        <div className="flex justify-between items-center leading-none text-[33px] font-[500] p-[40px]">
          <h2>(Project Gallery)</h2>
          <i className="ri-arrow-right-down-line"></i>
        </div>
        <Image1 url={currentWork.image2} />
        <Image1 url={currentWork.image3} />
        <Link to={`/work/${nextWork.id}`} onClick={handleNextWorkClick}>
          <div className="flex flex-col justify-center items-center text-center leading-none p-[40px]">
            <h3 className="text-[30px] font-[500]">(Next)</h3>
            <h1 className="text-[160px] font-[700] ">{nextWork.title}</h1>
          </div>
          <Image1 url={nextWork.image1} />
        </Link>
        <Connect />
      </main>
    </>
  );
};

export default Works;
