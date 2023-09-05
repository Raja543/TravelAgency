import React from "react";
import { Facebook } from "lucide-react";
import { Twitter } from "lucide-react";
import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#c5f8dc] font-albert text-black py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-2xl font-poppins font-bold">Travel Agency</h3>
          <p className="text-sm">Your Adventure Awaits</p>
        </div>
        <div className="flex space-x-4">
          &copy; {new Date().getFullYear()} Travel Agency. All Rights Reserved.
        </div>
        <div className="mt-4 md:mt-0">
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="">
                <Facebook className="text-[#3ebd73]" size={32} />
              </a>
            </li>
            <li>
              <a href="#" className="">
                <Twitter className="text-[#3ebd73]" size={32} />
              </a>
            </li>
            <li>
              <a href="#" className="">
                <Instagram className="text-[#3ebd73]" size={32} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
