import React from "react";

const Card = ({ name, role, info }) => {
  return (
    <div className="bg-[#fff] p-8 rounded-xl shadow-xl ">
      <div className="flex items-center justify-center p-4">
        <img
          src="/assets/images/profile.jpeg"
          className="w-16 h-16 rounded-full"
          alt="profile"
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-bold text-xl">{name}</h1>
        <h2 className="font-semibold text-lg">{role}</h2>
        <p className="text-gray-600 text-center max-w-sm">{info}</p>
      </div>
    </div>
  );
};

export default Card;
