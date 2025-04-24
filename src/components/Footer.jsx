import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/supercoder-logo.svg";
const Footer = () => {
  return (
    <div className="bg-[#242D3C] mt-12  flex flex-col gap-12 sm:flex-row justify-between items-center py-12 px-6 sm:px-12 ">
      {/* Left Section */}
      <div className=" sm:mb-0">
        <img src={logo} alt="Logo" />
      </div>

      {/* Right Section */}
      <div className="grid grid-cols-1 sm:grid-cols-4 w-full text-white  sm:gap-8">
        <div className="grid grid-rows-5">
          <h2 className="text-lg sm:text-xl font-semibold font-libreaskerville">
            Customers
          </h2>
          <Link to="/hire">Hire Developers</Link>
          <a href="">Book a Call</a>
        </div>

        <div className="grid grid-rows-5">
          <h2 className="text-lg sm:text-xl font-semibold font-libreaskerville">
            Developers
          </h2>
          <Link to="/apply">Apply for jobs</Link>
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

        <div className="grid grid-rows-5">
          <h2 className="text-lg sm:text-xl font-semibold font-libreaskerville">
            Contact
          </h2>
          <Link to="/contact">Contact Us</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
