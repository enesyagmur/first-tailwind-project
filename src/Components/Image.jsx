/* eslint-disable no-template-curly-in-string */
import React from "react";
import bg1 from "../Assets/bg1.jpg";

const Image = () => {
  return (
    <div
      className="w-full h-[650px] flex flex-col mt-20 bg-cover bg-fixed "
      style={{ backgroundImage: `url(${bg1})` }}
    >
      <div className="z-10 w-full lg:w-3/6 h-64 relative m-auto lg:mr-96  flex flex-col items-center justify-between">
        <p className="uppercase font-thin tracking-[1px]  sm:tracking-[3px]">
          Ambition is The first step towards
        </p>
        <p className="text-6xl sm:text-8xl font-black tracking-[16px] uppercase">
          success
        </p>
        <p className="capitalize tracking-[2px]">
          now avaliable for online coaching
        </p>
        <button className="capitalize font-thin text-sm bg-black text-customYellow  w-28 h-8 hover:text-customYellow transition-all duration-100">
          book now
        </button>
      </div>
    </div>
  );
};

export default Image;
