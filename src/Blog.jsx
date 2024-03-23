import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/blog/Card";
import Connect from "./components/Connect";

const Blog = () => {
  return (
    <main>
      <Navbar />
      <div className="h-45% py-[30px] md:px-[60px] max-md:px-[17px] ">
        <h1 className="text-[100px] md:text-[140px] lg:text-[140px] font-[600] leading-none">
          News
        </h1>
        <div className="flex justify-between items-end">
          <h2 className="text-[40px] md:text-[60px] lg:w-1/2 leading-[37px] md:leading-[50px] font-[500]">
            Exploring Creativity and Innovation Daily
          </h2>
          <div className="hidden lg:flex text-[28px] justify-center items-center cursor-pointer">
            <i className="ri-arrow-right-down-line mr-2"></i>
            <h3>Explore</h3>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        <Card
          id={"the-power-of-motion-design-bringing-your-brand-to-life"}
          url="https://assets-global.website-files.com/64589fb989b2b3e8783db8c8/645cfaf32e89b974c941097e_post-01-preview-p-1080.webp"
          title="The Power of Motion Design: Bringing Your Brand to Life"
          desc={
            "Discover how motion design can enhance your brand's visual identity and captivate your audience."
          }
          date={"May 12, 2023"}
        />
        <Card
          id={"why-user-experience-matters-a-guide-for-digital-designers"}
          url="https://assets-global.website-files.com/64589fb989b2b3e8783db8c8/645cfafe1e169d182b0ef591_post-02-preview-p-1080.webp"
          title="Why User Experience Matters: A Guide for Digital Designers"
          desc={
            "Learn about the importance of user experience in digital design and how to create exceptional user experiences."
          }
          date={"May 13, 2023"}
        />
        <Card
          id={"the-art-of-art-direction-elevating-your-brands-visual-identity"}
          url="https://assets-global.website-files.com/64589fb989b2b3e8783db8c8/645cfb07bee0f95ffcf9bc6c_post-03-preview-p-800.webp"
          title="The Art of Art Direction: Elevating Your Brand's Visual Identity"
          desc={
            "Explore the role of art direction in building a memorable and effective brand identity noticable equally."
          }
          date={"May 17, 2023"}
        />

        <Card
          id={"dos-and-donts-of-interaction-design-a-comprehensive-guide"}
          url="https://assets-global.website-files.com/64589fb989b2b3e8783db8c8/645cfb1074dc9bf736429f6c_post-04-preview-p-800.webp"
          title="Dos and Don'ts of Interaction Design: A Comprehen­sive Guide"
          desc={
            "Discover how motion design can enhance your brand's visual identity and captivate your audience."
          }
          date={"May 12, 2023"}
        />
        <Card
          id={"the-future-of-digital-design-trends-to-watch-in-2023"}
          url="https://assets-global.website-files.com/64589fb989b2b3e8783db8c8/645cfb1a98fa994bfc47ac24_post-05-preview-p-800.webp"
          title="The Future of Digital Design: Trends to Watch in 2023"
          desc={
            "Learn about the importance of user experience in digital design and how to create exceptional user experiences."
          }
          date={"May 13, 2023"}
        />
        <Card
          id={"collaboration-in-digital-design-working-together-for-success"}
          url="https://assets-global.website-files.com/64589fb989b2b3e8783db8c8/645cfb2265ebe2832999e4ba_post-06-preview-p-800.webp"
          title="Colla­boration in Digital Design: Working Together for Success"
          desc={
            "Explore the role of art direction in building a memorable and effective brand identity servicable."
          }
          date={"May 17, 2023"}
        />
      </div>
      <Connect className={
        "border-t-2 border-black"
      }/>
    </main>
  );
};

export default Blog;
