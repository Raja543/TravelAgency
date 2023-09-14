import { Check } from "lucide-react";
import React from "react";

const SubscriptionPlanCards = () => {
  return (
    <div className="bg-gray-100 p-4 md:px-32 md:py-20 custom-bg2">
      <h1 className="text-3xl md:text-5xl font-poppins font-bold text-center p-4 ">
        Choose The Plan That Suits You
      </h1>
      <p className="text-center text-gray-600 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptatum, quibusdam, voluptate, quos dolorum quia voluptas
        exercitationem quod quae quibusdam, voluptate, quos dolorum quia
        voluptas exercitationem quod quae quibusdam, voluptate, quos dolorum
        exercitationem quod quae quibusdam, voluptate, quos dolorum quiaxw
        quibusdam, voluptate, quos dolorum quiaxw quibusdam, voluptate, quos
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8 ">
        {/* Standard Plan */}
        <div className="bg-white rounded-xl p-6 shadow-xl hover:border-4 hover:border-[#44c57e] mx-10 md:mx-0">
          <h2 className="text-4xl font-bold text-center mb-4">Standard Plan</h2>
          <div className="text-center">
            <p className="text-5xl font-semibold  text-[#44d686]">$0</p>
            <p className="text-xl font-semibold text-[#44d686] ">/ Month</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold my-2">
              Perks for Standard Users:
            </h3>
            <div className="flex flex-row ">
              <Check className=" text-[#44d686]"></Check>
              <p className="ml-2">Access to basic travel content</p>
            </div>
            <div className="flex flex-row ">
              <Check className=" text-[#44d686]"></Check>
              <p className="ml-2">Limited Priority Support</p>
            </div>
            <div className="flex flex-row ">
              <Check className=" text-[#44d686] "></Check>
              <p className="ml-2">Exclusive newsletter</p>
            </div>
          </div>
          <div className="flex items-center">
            <button className="bg-[#37cd7b] m-auto text-white py-2 px-4 mt-2 rounded hover:bg-[#21ac60] transition duration-300">
              Subscribe
            </button>
          </div>
        </div>

        {/* Premium Plan */}
        <div className="bg-white rounded-xl p-6 shadow-xl hover:border-4 hover:border-[#44c57e] mx-10 md:mx-0 ">
          <h2 className="text-4xl font-bold text-center mb-4">Premium Plan</h2>
          <div className="text-center">
            <p className="text-5xl font-semibold  text-[#44d686]">$20</p>
            <p className="text-xl font-semibold text-[#44d686] ">/ Month</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold my-2">
              Perks for Standard Users:
            </h3>
            <div className="flex flex-row ">
              <Check className=" text-[#44d686]"></Check>
              <p className="ml-2">Access to premium travel content</p>
            </div>
            <div className="flex flex-row ">
              <Check className=" text-[#44d686]"></Check>
              <p className="ml-2">24/7 priority support</p>
            </div>
            <div className="flex flex-row ">
              <Check className=" text-[#44d686] "></Check>
              <p className="ml-2">Exclusive travel deals</p>
            </div>
            <div className="flex flex-row ">
              <Check className=" text-[#44d686] "></Check>
              <p className="ml-2">Ad-free experience</p>
            </div>
          </div>
          <div className="flex items-center">
            <button className="bg-[#37cd7b] m-auto text-white py-2 px-4 mt-2 rounded hover:bg-[#21ac60] transition duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlanCards;
