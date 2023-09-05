import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const handleButtonClick = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center z-10 relative bg-[#c5f8dc] p-4 md:px-16 md:pb-8 md:pt-16 ">
        <img
          src="/assets/images/leaf.png"
          alt="tree"
          className="w-64 h-auto absolute top-10 left-0 -z-10  hidden md:block"
        />
        <img
          src="/assets/images/leaf.png"
          alt="tree"
          className="w-64 h-auto absolute top-10 right-0 -rotate-90 -z-10 hidden md:block"
        />
        <h1 className="font-poppins text-4xl sm:text-6xl font-black md:max-w-2xl p-1 ">
          It's a Big World Out
        </h1>
        <h2 className="font-poppins text-4xl sm:text-6xl font-black md:max-w-2xl p-1">
          There, Go Explore.
        </h2>
        <p className="py-6 text-base text-center sm:text-lg px-12 nd:px-0">
          We always make our customers happy by providing many chance
        </p>
        <div className="flex flex-row items-center justify-center z-10">
          <Link to="/" onClick={handleButtonClick}>
            <button className="bg-[#30cf77] text-base md:text-lg max-w-fit text-white font-[Albert-sans] py-2 px-4 md:px-8 rounded-full m-2 md:m-4">
              Get Started
            </button>
          </Link>
          <Link to="/" onClick={handleButtonClick}>
            <button className="bg-[#fff] text-base md:text-lg max-w-fit text-black font-[Albert-sans] py-2 px-4 md:px-8 rounded-full m-2 md:m-4">
              Get a Demo
            </button>
          </Link>
        </div>
        <img
          src="/assets/images/herobgr.png"
          alt="hero"
          className="w-full h-auto -mt-6 md:-mt-12 p-2 md:p-0"
        />
      </div>
    </>
  );
};

export default Hero;
