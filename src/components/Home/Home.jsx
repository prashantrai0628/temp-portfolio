import React from "react";
import avatarImg from "../../assets/7358602-removebg-preview.png";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10 ">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight ">
          I am a passionate developer skilled in building modern web applications using React, Node.js, Java, and SQL/NoSQL databases. I enjoy creating seamless user experiences and robust backend systems, always striving to deliver high-quality, scalable solutions.
        </p>
        {/* <button className="mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Contact Me
        </button> */}
      </div>
      <div>
        {/* <img className="" src={avatarImg} alt="" /> */}
        <img className="w-80 h-80" src={avatarImg} alt="" />
      </div>
    </div>
  );
};

export default Home;