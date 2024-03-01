import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Links = [
  {
    name: "Home",
    url: "/",
    id: 1,
  },
  {
    name: "About",
    url: "/about",
    id: 2,
  },
  {
    name: "Work",
    url: "/work",
    id: 3,
  },
  {
    name: "Blog",
    url: "/blog",
    id: 4,
  },
  {
    name: "Contact",
    url: "/contact",
    id: 5,
  },
];

const colors = ["#eab308", "#10b981", "#0ea5e9", "#ec4899"];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const menuRef = useRef(null);
  const toggleMenu = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleClickOutsideMenu = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setToggle(false);
      }
    };

    document.addEventListener("click", handleClickOutsideMenu);

    return () => {
      document.removeEventListener("click", handleClickOutsideMenu);
    };
  }, []);

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };
  const h3Style = {
    backgroundColor: getRandomColor(),
    transition: "background-color 0.3s ease",
  };
  return (
    <nav className="fixed z-30 flex justify-end items-center w-full text-white bg-transparent max-lg:px-5 lg:px-20 py-10 gap-2">
      <h3
        style={h3Style}
        className="px-[23px] py-[15px] rounded-full cursor-pointer hover:bg-white hover:text-black transition-all"
      >
        0
      </h3>

      {isMobile ? (
        <>
          {toggle ? (
            <>
              <h3
                onClick={toggleMenu}
                ref={menuRef}
                className="bg-black px-[20px] py-[15px] rounded-full cursor-pointer hover:bg-white hover:text-black transition-all"
              >
                <i className="ri-close-fill" />
              </h3>
            </>
          ) : (
            <>
              <h3
                onClick={toggleMenu}
                ref={menuRef}
                className="bg-black px-[20px] py-[15px] rounded-full cursor-pointer hover:bg-white hover:text-black transition-all"
              >
                <i className="ri-menu-line" />
              </h3>
            </>
          )}
        </>
      ) : (
        <>
          <h3
            onClick={toggleMenu}
            ref={menuRef}
            className="bg-black px-[20px] py-[15px] rounded-full cursor-pointer hover:bg-white hover:text-black transition-all"
          >
            Menu
          </h3>
        </>
      )}

      {toggle && (
        <>
          {/* <div className="bg-black flex uppercase  flex-col text-8xl absolute top-[100px] gap-10 rounded-lg p-8">
            {Links.map((items) => (
              <div className="flex justify-start gap-6 hover:text-yellow-500 transition-all">
                <i className="ri-arrow-right-down-line"></i>
                <a href={items.url} key={items.id}>
                  {items.name}
                </a>
              </div>
            ))}
          </div> */}
          <div className="bg-black flex items-center justify-center uppercase w-full h-screen flex-col absolute top-0 right-0 gap-10 p-8">
            <div>
              <i className="ri-close-fill text-6xl bg-white rounded-full text-black cursor-pointer hover:bg-yellow-500 hover:text-white transition-all" />
            </div>
            {Links.map((items) => (
              <div className="flex justify-start text-6xl leading-[50px] md:leading-none md:text-8xl font-[600] tracking-wide gap-6 hover:text-yellow-500 hover:tracking-widest transition-all">
                <i className="ri-arrow-right-down-line"></i>
                <Link to={items.url} key={items.id}>
                  {items.name}
                </Link>
              </div>
            ))}
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
