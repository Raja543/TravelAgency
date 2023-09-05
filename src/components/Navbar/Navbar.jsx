import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-[#c5f8dc] w-full font-albert">
      <nav className="flex justify-between items-center w-full px-6 py-4 md:px-8">
        <Link to="/">
          <h1 className="font-black font-poppins text-2xl "> Travigo </h1>
        </Link>
        <ul
          className={`md:flex md:items-center hidden  ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <Link to="/">
            <li className="text-black font-black text-lg px-6">Home</li>
          </Link>
          <Link to="/findproperty">
            <li className="text-black font-black text-lg px-6">About</li>
          </Link>
          <Link to="/price">
            <li className="text-black font-black text-lg px-6">Pricing</li>
          </Link>
          <Link to="/contact">
            <li className="text-black font-black text-lg px-6">Contact</li>
          </Link>
          <Link to="/">
            <li className="text-black font-black text-lg px-6">Blog</li>
          </Link>
        </ul>
        <div className="md:flex md:items-center hidden ">
          <Link to="/register">
            <button className=" max-w-fit text-black text-lg font-[Albert-sans] py-2 px-6 ">
              Register
            </button>
          </Link>
          <Link to="/login">
            <button className="bg-[#30cf77] max-w-fit text-white text-lg font-[Albert-sans] py-2 px-6 rounded-full ">
              Login
            </button>
          </Link>
        </div>
        {/* Sidebar Hamburger Menu */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md hover:bg-gray-200 focus:outline-none focus:bg-gray-200"
          >
            {menuOpen ? (
              <i className="fas fa-times hidden" />
            ) : (
              <i className="fas fa-bars text-xl" />
            )}
          </button>
        </div>
        {/* Sidebar Menu */}
        <div
          className={`fixed md:hidden top-0 right-0 h-full w-56 bg-[#c5f8dc] bg-opacity-90 shadow-lg z-20 transform ease-in-out duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } md:translate-x-0`}
        >
          <div className="p-4 flex items-center justify-center">
            <ul className="space-y-4 mt-12">
              <Link to="/">
                <li className="text-black font-black text-xl px-4">Home</li>
              </Link>
              <Link to="/">
                <li className="text-black font-black text-xl px-4">About</li>
              </Link>
              <Link to="/">
                <li className="text-black font-black text-xl px-4">Pricing</li>
              </Link>
              <Link to="/">
                <li className="text-black font-black text-xl px-4">Contact</li>
              </Link>
              <Link to="/">
                <li className="text-black font-black text-xl px-4 ">Blog</li>
              </Link>
              <Link to="/register">
                <button className="bg-[#fff] max-w-fit text-black text-base font-[Albert-sans] py-1 px-4 rounded-lg duration-500 mx-3 my-2 ">
                  Register
                </button>
              </Link>
              <Link to="/">
                <button className="bg-[#35e082] text-base max-w-fit text-white font-[Albert-sans] py-1 px-4 rounded-lg duration-500 mx-4 my-1">
                  Login
                </button>
              </Link>
            </ul>
            {/* Close (X) icon inside the Sidebar Menu */}
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 p-2 rounded-md hover:bg-gray-200 focus:outline-none focus:bg-gray-200"
            >
              <i className="fas fa-times text-2xl" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
