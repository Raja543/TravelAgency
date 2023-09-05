import React from "react";

const Company = () => {
  return (
    <div className="flex flex-row items-center justify-center bg-[#ffff] my-1 mx-auto px-4 sm:px-10 md:px-20">
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4">
        <img
          src="/assets/images/mondaylogo.png"
          alt="Company"
          className="w-full h-auto max-w-full"
        />
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4">
        <img
          src="/assets/images/paypal-logo.png"
          alt="Company"
          className="w-full h-auto max-w-full"
        />
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4">
        <img
          src="/assets/images/travelloka-logo.png"
          alt="Company"
          className="w-full h-auto max-w-full"
        />
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4">
        <img
          src="/assets/images/tokopedia-logo.png"
          alt="Company"
          className="w-full h-auto max-w-full"
        />
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4">
        <img
          src="/assets/images/slack-logo.webp"
          alt="Company"
          className="w-full h-auto max-w-full"
        />
      </div>
    </div>
  );
};

export default Company;
