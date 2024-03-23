import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { useForm, ValidationError } from "@formspree/react";
import { Link } from "react-router-dom";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [state, handleSubmit] = useForm("xpznzygv");
  if (state.succeeded) {
    return (
      <div className=" bg-white h-screen">
        <div className="h-45% bg-[#f5f3f0] py-[20px] md:px-[60px] px-[50px]">
          <div className="md:text-[150px] text-[160px] font-[600] tracking-tight leading-none">
            Hey{" "}
            <h1 className="capatalize leading-[45px] inline">
              {name} <span>🤗</span>
            </h1>
            <br />
            <h1 className="text-[100px] leading-[100px]">
              Your Request has been sent successfully
            </h1>
          </div>
          <div className="w-full flex justify-between pt-4 items-center text-[23px] font-[500]">
            <h1 className="">({email})</h1>
            <div className="cursor-pointer md:block flex justify-between items-center">
              <Link to={"/"}>
                <button className="py-1 px-3 tracking-wide text-white rounded-lg text-lg bg-black hover:text-black hover:bg-white shadow-md">
                  Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log({
  //     name,
  //     email,
  //     message,
  //   });
  // };

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
          <h3 className=" text-[20px] md:text-[30px] font-[500]">(Contact)</h3>
          <h1 className="lg:text-[140px] md:text-[100px] text-[60px] lg:leading-[140px] leading-none font-[600]">
            Let's Get In Touch
          </h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 md:gap-6 w-full justify-start items-center my-10 lg:my-20"
          >
            <input
              id="name"
              type="name"
              name="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Enter Your Name"
              className="p-2 bg-slate-200 text-black w-full text-md tracking-wide border-2 border-black"
            />
            <input
              id="email"
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Enter Your Email"
              className="p-2 bg-slate-200 text-black w-full  text-md tracking-wide border-2 border-black"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />

            <textarea
              className="w-full text-black bg-slate-200 p-2 text-md tracking-wide border-2 border-black"
              placeholder="Enter your message"
              id="message"
              name="message"
              cols="30"
              rows="10"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button
              type="submit"
              disabled={state.submitting}
              className="py-2 px-4 tracking-wide text-white rounded-lg text-xl bg-black hover:text-black hover:bg-white shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
