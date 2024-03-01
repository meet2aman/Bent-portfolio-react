import React, { useState } from "react";
import Navbar from "./components/Navbar";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      name,
      email,
      message,
    });
  };

  return (
    <>
      <Navbar />
      <div className="md:flex justify-between">
        <div className="md:w-[50%] h-full md:fixed top-0 bottom-0 left-0">
          <img
            src="https://assets-global.website-files.com/64589fb989b2b33c593db89d/645f7059f38b6fb625152289_contact-p-1080.webp"
            alt="contact-pic"
            className="md:h-full w-full object-cover"
          />
        </div>
        <div className="md:w-[50%] max-lg:px-[20px] lg:px-[30px] md:absolute right-0 top-[90px] text-black overflow-y-auto max-md:mt-6">
          <h3 className="text-[30px] font-[500]">(Contact)</h3>
          <h1 className="lg:text-[170px] md:text-[100px] text-[60px] lg:leading-[140px] leading-none font-[600]">
            Let's Get In Touch
          </h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 md:gap-6 w-full justify-start items-center my-10 lg:my-20"
          >
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Enter Your Name"
              className="p-4 bg-slate-200 text-black w-full text-lg tracking-wide border-2 border-black"
            />
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Enter Your Email"
              className="p-4 bg-slate-200 text-black w-full  text-lg tracking-wide border-2 border-black"
            />

            <textarea
              className="w-full text-black bg-slate-200 p-4 text-lg tracking-wide border-2 border-black"
              name="Enter Your Message"
              placeholder="Enter your message"
              id=""
              cols="30"
              rows="10"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            ></textarea>
            <button className="py-2 px-4 tracking-wide text-white rounded-lg text-2xl bg-black hover:text-black hover:bg-white shadow-md">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
