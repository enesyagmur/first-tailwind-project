import React from "react";

const Header = () => {
  return (
    <div className="w-full h-[120px] sm:h-[100px] flex justify-center bg-white top-0 left-0 fixed z-50">
      <div className="w-full md:w-5/6 lg:w-4/6 xl:w-3/6 h-full flex sm:flex-row flex-col items-center sm:justify-between justify-evenly">
        <div className="w-3/6 sm:w-2/6 sm:h-full h-1/2 flex flex-col items-center justify-center ">
          <p className="text-l font-bold tracking-widest">ALLAN JOHNSON</p>
          <p className="text-xs text-customYellow">Personel Life Coach</p>
        </div>

        <div className="w-full h-1/2 sm:w-3/6 sm:h-full flex items-center justify-evenly text-xs">
          <p>Home</p>
          <p>About</p>
          <p>Contact</p>
          <p>Products</p>
          <p>Comments</p>
          <i class="fa-regular fa-user p-2  border-2 border-customYellow rounded-full cursor-pointer"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
