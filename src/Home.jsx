import React from "react";
import Name from "./components/Name";
import Image from "./components/Image";
import Image1 from "./components/Image-1";
import About from "./components/About";
import Work from "./components/Work";
import Marquee from "./components/Marquee";
import Bar from "./components/Bar";
import Clients from "./components/Clients";
import Connect from "./components/Connect";
import Navbar from "./components/Navbar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Name />
      <Image url="https://assets-global.website-files.com/64589fb989b2b33c593db89d/6458a6db645ec6a527000cfa_home-hero.webp" />
      <About />
      <Work />
      <Marquee />
      <Link to={`/work/camera`}>
        <Image1 url="https://assets-global.website-files.com/64589fb989b2b3e8783db8c8/645cad0d8364135d4087b9c8_project-01.webp" />
        <Bar
          name="Camera"
          desc="   A cutting-edge digital platform designed to revolutionize the way
            people interact with technology."
        />
      </Link>
      <Link to={`/work/noise`}>
        <Image1 url="https://assets-global.website-files.com/64589fb989b2b3e8783db8c8/645cad1988b7ca338942d0b3_project-03.webp" />
        <Bar
          name="Noise"
          desc="A cutting-edge digital platform designed to revolutionize the way
            people interact with technology."
        />
      </Link>
      <Link to={`/work/robot`}>
        <Image1 url="https://assets-global.website-files.com/64589fb989b2b3e8783db8c8/645cad129d3885d86c115c7f_project-02.webp" />
        <Bar
          name="Robot"
          desc="A cutting-edge digital platform designed to revolutionize the way
            people interact with technology."
        />
      </Link>
      <Clients />
      <Connect />
    </div>
  );
};

export default Home;
