import React from "react";

const Plan = () => {
  return (
    <div
      className="w-full h-[1500px] lg:h-[700px] flex flex-col items-center justify-evenly 
    bg-gradient-to-b from-customYellow to-blue-300"
    >
      <p className="uppercase font-black text-3xl pt-4">how can i help you</p>
      <div className=" h-[1400px] lg:w-5/6 lg:h-[400px] flex flex-col lg:flex-row items-center lg:justify-evenly justify-evenly">
        <div className="plan">
          <p className="w-5/6 h-1/6 uppercase font-bold text-center text-xl">
            free consulation
          </p>
          <p className="w-5/6 h-1/6 text-center text-sm">
            Use this area to descripe one of your services
          </p>
          <div className="w-5/6 h-0.5 bg-black"></div>
          <p className="text-sm">45 min</p>
          <button className="w-24 h-8 bg-black text-customYellow text-sm">
            Book It
          </button>
        </div>
        <div className="plan animate-border-color-change">
          <p className="w-5/6 h-1/6 uppercase font-bold text-center text-xl">
            online coaching
          </p>
          <p className="w-5/6 h-1/6 text-center text-sm">
            Use this area to descripe one of your services
          </p>
          <div className="w-5/6 h-0.5 bg-black"></div>
          <p className="text-sm">1 hr</p>
          <p className="text-sm">$70</p>

          <button className="w-24 h-8 bg-black text-customYellow  text-sm">
            Book It
          </button>
        </div>
        <div className="plan">
          <p className="w-5/6 h-1/6 uppercase font-bold text-center text-xl">
            self - improvement
          </p>
          <p className="w-5/6 h-1/6 text-center text-sm">
            Use this area to descripe one of your services
          </p>
          <div className="w-5/6 h-0.5 bg-black"></div>
          <p className="text-sm">Mon, Tue, Wed, Thu, Fri</p>
          <p className="text-sm">1 hr</p>
          <p className="text-sm">$60</p>
          <button className="w-24 h-8 bg-black text-customYellow text-sm">
            Book It
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plan;
