import React from "react";
import {
  FileArchive,
  Home,
  MessageSquare,
  Ticket,
  Settings,
  Banknote,
  LogOut,
  BellDot,
} from "lucide-react";
import { useState } from "react";
import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
import "./Calendar.css";

const Sidebar = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
  };
  return (
    <div className="flex flex-row justify-between border-2 bg-white rounded-2xl ">
      <div className="bg-[#fff] text-black w-60 m-1 p-4 h-[100vh]">
        <div className="flex flex-row justify-between items-center my-2">
          <h2 className="text-2xl font-bold font-poppins px-2">Travigo</h2>
        </div>
        <div className="my-4">
          <div className=" font-roboto">
            <div className="flex flex-row bg-[#47da93] rounded-xl text-[#fff] cursor-pointer p-4 my-2 ">
              <Home />
              <p className=" font-bold ml-4 ">Dashboard</p>
            </div>
            <div className="flex flex-row hover:bg-[#47da93] rounded-xl hover:text-[#fff] cursor-pointer p-4 ">
              <Ticket />
              <p className=" font-bold ml-4 ">My Tickets</p>
            </div>
            <div className="flex flex-row hover:bg-[#47da93] rounded-xl hover:text-[#fff] cursor-pointer p-4 ">
              <FileArchive />
              <p className=" font-bold ml-4 ">Favourite</p>
            </div>
            <div className="flex flex-row hover:bg-[#47da93] rounded-xl hover:text-[#fff] cursor-pointer p-4 ">
              <MessageSquare />
              <p className=" font-bold ml-4 ">Message</p>
            </div>
            <div className="flex flex-row hover:bg-[#47da93] rounded-xl hover:text-[#fff] cursor-pointer p-4 ">
              <Banknote />
              <p className=" font-bold ml-4 ">Transaction</p>
            </div>
            <div className="flex flex-row hover:bg-[#47da93] rounded-xl hover:text-[#fff] p-4 cursor-pointer">
              <Settings />
              <p className=" font-bold ml-4 ">Settings</p>
            </div>
          </div>
        </div>
        <div>
          <img
            src="/assets/images/p1.jpeg"
            className="rounded-xl h-auto w-full my-8 -mx-16"
          />
        </div>
        <div className="flex flex-row hover:bg-[#47da93] rounded-xl hover:text-[#fff] my-12 p-4 cursor-pointer ">
          <LogOut />
          <p className=" font-bold ml-4 ">Log Out</p>
        </div>
      </div>

      <div className="bg-[#f6f6f6] text-black w-full my-6 rounded-xl  p-4 h-[100vh]">
        <div className="flex flex-row justify-between items-center my-2">
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold font-poppins px-2">
              Hello , Raja! 👋
            </h2>
            <p className="text-lg font-bold font-roboto px-2">
              Welcome back and Explore the world
            </p>
          </div>
          <div className="my-4 ">
            <input
              type="text"
              placeholder="Search Destination.."
              className="p-2 w-64 border-2 rounded-lg bg-[#fff] text-black"
            />
          </div>
          <div>
            <BellDot />
          </div>
        </div>

        <div className="flex flex-row justify-between items-center gap-4 my-2">
          <div className="w-1/3">
            <img
              src="/assets/images/P2.jpeg"
              className="rounded-xl h-auto w-full "
            />
          </div>

          <div className="w-1/3">
            <img
              src="/assets/images/P2.jpeg"
              className="rounded-xl h-auto w-full "
            />
          </div>
          <div className="w-1/3">
            <img
              src="/assets/images/P2.jpeg"
              className="rounded-xl h-auto w-full "
            />
          </div>
        </div>

        <div className="flex flex-row justify-between items-center ">
          <div className="flex flex-col justify-between items-center">
            <div className="flex flex-row justify-around items-center">
              <div className="flex flex-col ">
                <p className="text-2xl font-bold font-poppins px-2">
                  Best Destination
                </p>
                <p className="text-lg font-bold font-poppins px-2">
                  100 destination found
                </p>
              </div>
              <div className="flex border-2 border-[#e5e5e5] m-4 ml-40">
                <p className="text-xl font-bold font-poppins p-4 mr-0">Filters</p>
              </div>
            </div>

            <div className="flex flex-row border-2 border-[#e7e5e5] rounded-lg">
              <div className="flex items-center justify-center p-2">
                <img
                  src="/assets/images/P2.jpeg"
                  className="rounded-xl h-16 w-24 object-cover "
                />
              </div>

              <div className="flex flex-col justify-center ">
                <p className="text-xl font-bold font-poppins px-2">
                  crooked forest
                </p>
                <p className="font-light px-2 font-albert ">
                  Lorem ipsum dolor sit amet
                </p>
              </div>
              <div className="flex flex-col justify-center items-center ml-20">
                <p className="text-xl font-bold font-poppins px-2">$ 200</p>
              </div>
            </div>
            <div className="flex flex-row border-2 border-[#e7e5e5] my-2 rounded-lg">
              <div className="flex items-center justify-center p-2">
                <img
                  src="/assets/images/P2.jpeg"
                  className="rounded-xl h-16 w-24 object-cover "
                />
              </div>

              <div className="flex flex-col justify-center ">
                <p className="text-xl font-bold font-poppins px-2">
                  crooked forest
                </p>
                <p className="font-light px-2 font-albert ">
                  Lorem ipsum dolor sit amet
                </p>
              </div>
              <div className="flex flex-col justify-center items-center ml-20">
                <p className="text-xl font-bold font-poppins px-2">$ 200</p>
              </div>
            </div>
            <div className="flex flex-row border-2 border-[#e7e5e5] rounded-lg">
              <div className="flex items-center justify-center p-2">
                <img
                  src="/assets/images/P2.jpeg"
                  className="rounded-xl h-16 w-24 object-cover "
                />
              </div>

              <div className="flex flex-col justify-center ">
                <p className="text-xl font-bold font-poppins px-2">
                  crooked forest
                </p>
                <p className="font-light px-2 font-albert ">
                  Lorem ipsum dolor sit amet
                </p>
              </div>
              <div className="flex flex-col justify-center items-center ml-20">
                <p className="text-xl font-bold font-poppins px-2">$ 200</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center bg-[#151d3f] text-[#fff] rounded-2xl">
            <img
              src="/assets/images/p3.png"
              className="rounded-xl h-auto w-40 object-cover"
            />
            <h1 className=" font-bold font-poppins px-2">Let's Explore</h1>
            <h2 className="font-bold font-poppins px-2">The beauty</h2>
            <p className="text-sm font-bold font-albert px-4">
              Get special offer & news
            </p>
            <button className="bg-[#30cf77] max-w-fit text-white text-lg font-[Albert-sans] m-4 py-2 px-8 rounded-lg ">
              Join now
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#fff] text-black w-96 m-1 p-4 h-[100vh]">
        <div className="flex flex-row my-2">
          <img
            src="/assets/images/profile.jpeg"
            className="rounded-xl h-auto w-12 m-4"
          />
          <div className="flex flex-col justify-center ">
            <p className="text-2xl font-bold font-poppins px-2">Raja Kumar</p>
            <p className="font-semibold px-2 font-albert ">Travel Enthusiast</p>
          </div>
        </div>
        <div>
          <Calendar
            onChange={handleDateChange} // Callback for date selection
            value={date} // The selected date
          />
        </div>
        <div className="flex flex-row justify-between items-center mt-8">
          <p className="text-2xl font-bold font-poppins px-2">My Schedule</p>
          <p className="text-2xl font-bold font-poppins px-2">. .</p>
        </div>
        <div className="flex flex-col items-center justify-between ">
          <div className="flex flex-row border-2 border-[#e7e5e5] rounded-l my-6">
            <div className="flex items-center justify-center p-2">
              <img
                src="/assets/images/P2.jpeg"
                className="rounded-xl h-16 w-24 object-cover "
              />
            </div>

            <div className="flex flex-col justify-center ">
              <p className="text-xl font-bold font-poppins px-2">
                crooked forest
              </p>
              <p className="font-light px-2 font-albert ">
                Lorem ipsum dolor sit amet
              </p>
            </div>
          </div>
          <div className="flex flex-row border-2 border-[#e7e5e5] rounded-lg">
            <div className="flex items-center justify-center p-2">
              <img
                src="/assets/images/P2.jpeg"
                className="rounded-xl h-16 w-24 object-cover "
              />
            </div>

            <div className="flex flex-col justify-center ">
              <p className="text-xl font-bold font-poppins px-2">
                crooked forest
              </p>
              <p className="font-light px-2 font-albert ">
                Lorem ipsum dolor sit amet
              </p>
            </div>
          </div>
          <div className="flex flex-row border-2 border-[#e7e5e5] rounded-lg mt-2">
            <div className="flex items-center justify-center p-2">
              <img
                src="/assets/images/P2.jpeg"
                className="rounded-xl h-16 w-24 object-cover "
              />
            </div>

            <div className="flex flex-col justify-center ">
              <p className="text-xl font-bold font-poppins px-2">
                crooked forest
              </p>
              <p className="font-light px-2 font-albert ">
                Lorem ipsum dolor sit amet
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
