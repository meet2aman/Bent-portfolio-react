import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Image1 from "./components/Image-1";
import Connect from "./components/Connect";
import { Link, useParams } from "react-router-dom";
import { data } from "./lib/data";
const Post = () => {
  let { postId } = useParams();  // getting postId from params

  const [currentPost, setCurrentPost] = useState(
    data.find((post) => post.id === postId) // getting post based on params
  );
  const nextPostIndex =
    (data.findIndex((post) => post.id === postId) + 1) % data.length;
  const nextPost = data[nextPostIndex];
  const handleNextPostClick = () => {
    setCurrentPost(nextPost);
  };
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth", // Smooth scrolling animation
        block: "start", // Align the top of the element at the top of the viewport
      });
    }
  };
  return (
    <>
      <main className="relative">
        <Navbar />
        <div className="lg:grid grid-cols-2 justify-between items-start">
          <div className="lg:h-[100vh] lg:sticky top-0 overflow-hidden translate-x-0 translate-y-0 self-start">
            <div className="w-full h-full overflow-hidden">
              <img
                src={`${currentPost.leftImage}`}
                alt="cake"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="p-2 md:px-[30px] lg:p-[40px]">
            <div className="flex flex-col justify-between gap-6 border-b-2 border-black py-10">
              <div>
                <h2 className="">{currentPost.date}</h2>
                <h1 className="text-[37px] md:text-[55px] leading-[36px] md:leading-[50px] font-[600]">
                  {currentPost.title}
                </h1>
              </div>
              <div>
                <p className="text-[16px] tracking-wide">
                  In today's fast-paced digital landscape, it's more important
                  than ever to capture your audience's attention quickly and
                  effectively. Motion design is a powerful tool that can help
                  your brand stand out from the crowd by bringing your visual
                  identity to life through animation and dynamic visuals. In
                  this post, we'll explore the basics of motion design,
                  including its history and key principles, and how it can
                  benefit your brand.
                </p>
                <div className="mt-4">
                  <button
                    onClick={() => handleScroll("read-more")}
                    className="flex justify-start items-center gap-4 text-[24px] md:text-[20px] hover:underline transition-all underline-offset-4"
                  >
                    <i className="ri-arrow-right-down-line"></i>
                    <p>Read More</p>
                  </button>
                </div>
              </div>
            </div>
            <div id="read-more">
              <div className="mt-6">
                <h2 className="text-[35px] md:text-[50px] font-[500] leading-none mb-8 mt-16">
                  Basics of Design
                </h2>
                <p className="tracking-wide md:leading-7 text-[15px] md:text-[16px]">
                  Motion design is a powerful tool that can enhance your brand's
                  visual identity and captivate your audience. But what exactly
                  is motion design? In simple terms, it's the art of bringing
                  graphics, animation, and video together to create engaging and
                  dynamic visual content. Motion design can be used in a wide
                  variety of applications, from explainer videos and social
                  media ads to website animations and digital signage.
                </p>
                <p className="mt-4 tracking-wide md:leading-7 text-[15px] md:text-[16px]">
                  The history of motion design can be traced back to the early
                  days of film and animation, but it wasn't until the rise of
                  digital media that motion design truly began to flourish. With
                  the development of powerful software tools and an increasing
                  demand for dynamic visual content, motion design has become an
                  essential component of modern brand communication.
                </p>
              </div>
              <div className="mt-6">
                <h2 className="text-[35px] md:text-[50px] font-[500] leading-none mb-8 mt-16">
                  Principles of Design
                </h2>
                <p className="tracking-wide md:leading-7 text-[15px] md:text-[16px]">
                  Effective motion design requires a solid understanding of the
                  principles of animation and design. These principles include
                  timing, spacing, staging, and more. Timing refers to the speed
                  and rhythm of motion, while spacing is the placement of
                  elements in relation to each other. Staging refers to the
                  overall composition of the design, while other principles such
                  as anticipation, exaggeration, and squash and stretch help to
                  create dynamic and engaging motion.
                </p>
                <p className="mt-4 tracking-wide md:leading-7 text-[15px] md:text-[16px]">
                  One of the most important aspects of motion design is
                  storytelling. Whether you're creating an explainer video or a
                  social media ad, the motion design should support and enhance
                  the story you're trying to tell. This means understanding your
                  audience, identifying your key message, and designing visuals
                  that effectively communicate your brand's values and message.
                </p>
              </div>
              <div className="mt-6">
                <h2 className="text-[35px] md:text-[50px] font-[500] leading-none mb-8 mt-16">
                  Benefits of Design for Your Brand
                </h2>
                <p className="tracking-wide md:leading-7 text-[15px] md:text-[16px]">
                  Motion design can offer a wide range of benefits for your
                  brand. For one, it can help your brand stand out from the
                  competition by creating a unique and memorable visual
                  identity. Motion design can also help to increase engagement
                  and drive conversions by capturing your audience's attention
                  and guiding them through a seamless and engaging experience.
                </p>
                <p className="mt-4 tracking-wide md:leading-7 text-[15px] md:text-[16px]">
                  Moreover, motion design can help to communicate complex ideas
                  and concepts in a simple and accessible way. Whether you're
                  explaining a product or service or highlighting your brand's
                  mission and values, motion design can help you connect with
                  your audience in a meaningful and impactful way.
                </p>
                <p className="mt-4 tracking-wide md:leading-7 text-[15px] md:text-[16px]">
                  Another benefit of motion design is its versatility. From
                  explainer videos and social media ads to website animations
                  and digital signage, motion design can be used across a wide
                  range of applications to communicate your brand's message
                  effectively.
                </p>
              </div>
            </div>
          </div>
        </div>
        <section>
          <Link
            to={`/post/${nextPost.id}`}
            onClick={handleNextPostClick}
            className="flex justify-center items-center flex-col font-[600] lg:w-[70%] mx-auto leading-none text-center p-3 lg:p-10"
          >
            <h2 className="text-[20px] lg:text-[22px]">( Next )</h2>
            <h1 className="text-[35px] lg:text-[60px]">{nextPost.title}</h1>
          </Link>
        </section>
        <Link to={`/post/${nextPost.id}`} onClick={handleNextPostClick}>
          <Image1 url={nextPost.leftImage} />
        </Link>
        <Connect />
      </main>
    </>
  );
};

export default Post;
