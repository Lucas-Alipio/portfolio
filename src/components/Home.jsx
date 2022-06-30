import React from "react";
import Lucas from "../assets/lucas.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-6xl font-bold text-white">
            I'm a Full Stacker Developer
          </h2>
          <p className="text-gray-400 py-4">
            I'm starting my career as a developer. Currently I'm enjoying to
            work on web applications. I'm in my last year for a bachelor's
            degree in computer engineering. I started this course because I've
            always loved technology and during my time in college I fell in love
            with programming.
          </p>

          <div>
            <button
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r
            from-cyan-500 to-blue-600"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>

        <div>
          <img
            src={Lucas}
            alt="lucas"
            className="rounded-2xl mx-auto w-1/4 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
