import React from "react";
import logo from "../assets/images/supercoder-logo.svg";
const Footer = () => {
  return (
    <div className="bg-[#242D3C] flex flex-col sm:flex-row justify-between items-center py-6 px-6 sm:px-12">
      {/* Left Section */}
      <div className="mb-6 sm:mb-0">
        <img src={logo} alt="Logo" />
      </div>

      {/* Right Section */}
      <div className="grid grid-cols-1 sm:grid-cols-4 w-full text-white gap-6 sm:gap-12">
        <div className="grid grid-rows-5">
          <h2 className="text-lg sm:text-xl font-semibold font-libreaskerville">
            Customers
          </h2>
          <a href="">Hire Developers</a>
          <a href="">Book a Call</a>
        </div>

        <div className="grid grid-rows-5">
          <h2 className="text-lg sm:text-xl font-semibold font-libreaskerville">
            Developers
          </h2>
          <a href="">Apply for Jobs</a>
          <a href="">Developer login</a>
          <a href="">Remote</a>
          <a href="">Developer Jobs</a>
        </div>

        <div className="grid grid-rows-5">
          <h2 className="text-lg sm:text-xl font-semibold font-libreaskerville">
            Company
          </h2>
          <a href="">Press</a>
        </div>

        <div className="grid grid-rows-5 gap-3">
          <h2 className="text-lg sm:text-xl font-semibold font-libreaskerville">
            Contact
          </h2>
          <a href="">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
