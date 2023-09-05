import React from "react";
import Card from "./Card";

const Testimonial = () => {
  return (
    <div className="bg-[#e2ffef] p-4 md:p-20 relative">
      <img
        src="/assets/images/leaf.png"
        alt="tree"
        className="w-40 h-auto absolute top-0 left-0 rotate-90 hidden md:block "
      />
      <img
        src="/assets/images/leaf.png"
        alt="tree"
        className="w-40 h-auto absolute bottom-0 right-0 -rotate-90 hidden md:block"
      />
      <h1 className="text-center text-3xl md:text-5xl font-bold font-poppins p-4 ">
        What Our Customer Say ?
      </h1>
      <p className="text-center p-2  text-base md:text-xl  font-bold font-albert">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:px-20 w-5/6 mx-auto my-8">
        <Card
          name="John Doe"
          role="CEO"
          info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatibus, quibusdam, quos, quas voluptatem quod quia quae"
        />
        <Card
          name="John Doe"
          role="CEO"
          info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatibus, quibusdam, quos, quas voluptatem quod quia quae"
        />
        <Card
          name="John Doe"
          role="CEO"
          info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatibus, quibusdam, quos, quas voluptatem quod quia quae"
        />
      </div>
    </div>
  );
};

export default Testimonial;
