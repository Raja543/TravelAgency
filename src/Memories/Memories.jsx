import React from "react";

const Memories = () => {
  return (
    <>
      <div className="p-10 md:p-20 flex  flex-col md:flex-row  gap-10 custom-bg font-roboto ">
        <div className="md:w-1/2  ">
          <img
            src="/assets/images/travel2.webp"
            alt="travel1"
            className="w-full h-full rounded-xl "
          />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-3xl md:text-5xl font-poppins font-bold md:pt-8">
            Sweet Memories
          </h1>
          <h2 className="text-3xl md:text-5xl font-poppins font-bold py-2">
            come to life again
          </h2>
          <p className="text-base md:text-xl py-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div class="flex flex-row mx-auto items-center justify-center py-4">
            <div class="flex flex-col items-center justify-center px-4 py-2 md:px-8 md:py-4">
              <h1 class="text-2xl md:text-4xl font-bold text-[#3fb374]">10</h1>
              <p class="text-base md:text-lg font-semibold pt-1 md:pt-2">
                Years
              </p>
              <p class="text-base md:text-lg font-semibold">Experience</p>
            </div>
            <div class="flex flex-col items-center justify-center px-4 py-2 md:px-8 md:py-4">
              <h1 class="text-2xl md:text-4xl font-bold text-[#3fb374]">
                300 +
              </h1>
              <p class="text-base md:text-lg font-semibold pt-1 md:pt-2">
                Destinations
              </p>
              <p class="text-base md:text-lg font-semibold">Booked</p>
            </div>
            <div class="flex flex-col items-center justify-center px-4 py-2 md:px-8 md:py-4">
              <h1 class="text-2xl md:text-4xl font-bold text-[#3fb374]">
                400K
              </h1>
              <p class="text-base md:text-lg font-semibold pt-1 md:pt-2">
                Users
              </p>
              <p class="text-base md:text-lg font-semibold">Visited</p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:p-20 flex flex-col  bg-[#caefdd] text-black font-poppins ">
        <h1 className="text-4xl md:text-6xl text-center font-poppins font-bold md:py-6">
          Explore the beauty of the world
        </h1>
        <p className="text-base md:text-xl font-roboto text-center py-2 md:pb-6 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <img
          src="/assets/images/travel.jpeg"
          alt="travel1"
          className="w-full h-full rounded-xl py-2 "
        />
      </div>
    </>
  );
};

export default Memories;
