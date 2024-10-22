/* eslint-disable no-unused-vars */
import "remixicon/fonts/remixicon.css";
import LocomotiveScroll from "locomotive-scroll";
import { Routes, Route, HashRouter, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";
import Work from "./Work";
import Post from "./Post";
import Works from "./Works";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="work" element={<Work />} />
          <Route path="work/:workId" element={<Works />} />
          <Route path="post/:postId" element={<Post />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
