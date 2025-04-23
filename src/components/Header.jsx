import React from "react";

function Header() {
  return (
    <div className="bg-blue-100 z-10 px-4 sm:px-6 py-4 flex flex-col sm:flex-row sm:justify-between items-center fixed w-full shadow-lg gap-2 sm:gap-0">
      {/* Left Section (Logo) */}
      <div>
        <h1 className="text-blue-500 font-bold text-lg sm:text-2xl md:text-4xl">
          SUPERCODER
        </h1>
      </div>

      {/* Right Section (Buttons) */}
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center">
        <button className="border-2 border-blue-500 font-semibold text-blue-500 py-2 px-4 rounded-full text-sm sm:text-base whitespace-nowrap">
          Apply for Jobs
        </button>
        <button className="bg-blue-500 py-2 px-4 rounded-full border-2 border-blue-500 text-white font-semibold text-sm sm:text-base whitespace-nowrap">
          Hire Developer
        </button>
      </div>
    </div>
  );
}

export default Header;
