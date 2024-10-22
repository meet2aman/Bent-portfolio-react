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
    <div className="pt-[40px] pb-[20px] md:px-[60px] px-[10px]">
      <h1 className="lg:text-[150px] text-[45px] md:text-[100px] leading-[35px] md:leading-[80px] lg:leading-[120px] font-[600] tracking-tight">
        Aman Kushwaha <br />
        Digital Designer
      </h1>
      <div className="w-full flex justify-between pt-4 items-center text-[15px] lg:text-[25px] font-[500]">
        <h1 className="mt-2">(Delhi, India)</h1>
        <div className="cursor-pointer md:block flex justify-between items-center">
          <button onClick={() => handleScroll("read-more")}>
            <i className="ri-arrow-right-down-line mr-2"></i>
            Scroll Down
          </button>
        </div>
      </div>
    </div>
  );
};

export default Name;
