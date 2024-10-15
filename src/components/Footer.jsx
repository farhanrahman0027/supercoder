import React from "react";
import logo from "../assets/images/supercoder-logo.svg";
const Footer = () => {
  return (
    <div className="bg-[#242D3C] flex justify-between items-center">
      {/*left section */}
      <div className=" ">
        <img src={logo} alt="" />
      </div>

      {/*right section */}

      <div className="grid grid-cols-4  w-full px-12 ml-28 text-white">
        <div className=" grid grid-rows-5">
          <h2 className="text-xl font-semibold font-libreaskerville">
            Customers
          </h2>
          <a href="">Hire Developers</a>
          <a href="">Book a Call</a>
        </div>

        <div className=" grid grid-rows-5">
          <h2 className="text-xl font-semibold font-libreaskerville">
            Developers
          </h2>
          <a href="">Apply for Jobs</a>
          <a href="">Developer login</a>
          <a href="">Remote</a>
          <a href="">Developer Jobs</a>
        </div>

        <div className=" grid grid-rows-5">
          <h2 className="text-xl font-semibold font-libreaskerville">
            Company
          </h2>
          <a href="">Press</a>
        </div>

        <div className="grid grid-rows-5 gap-3">
          <h2 className="text-xl font-semibold font-libreaskerville">
            Contact
          </h2>
          <a href="">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
