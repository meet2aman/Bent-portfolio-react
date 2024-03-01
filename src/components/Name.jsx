import React from "react";

const Name = () => {
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
    <div className="h-45% py-[40px] md:px-[60px] px-[50px]">
      <h1 className="md:text-[190px] text-[160px] leading-[130px] md:leading-[144px] font-[600] tracking-tight">
        Aman Kushwaha <br />
        Digital Designer
      </h1>
      <div className="w-full flex justify-between pt-4 items-center text-[32px] font-[500]">
        <h1 className="mt-4">(Delhi, India)</h1>
        <div className="cursor-pointer md:block flex justify-between items-center">
          <a onClick={() => handleScroll("read-more")}>
            <i className="ri-arrow-right-down-line mr-2"></i>
            Scroll Down
          </a>
        </div>
      </div>
    </div>
  );
};

export default Name;
