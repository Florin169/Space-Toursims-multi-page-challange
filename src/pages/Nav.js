import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/shared/logo.svg";

const Nav = () => {
  const [sideMenu, setSideMenu] = useState(false);

  return (
    <div className="bg-gray-800 lg:relative font-main">
      <div className=" p-4 flex justify-between items-center ">
        <Link to="/">
          <img src={logo} />
        </Link>
        <div
          className="p-4 space-y-2  z-10 lg:hidden"
          onClick={() => setSideMenu(!sideMenu)}
        >
          <span className="w-8 bg-white h-0.5 block "></span>
          <span className="w-8 bg-white h-0.5 block "></span>
          <span className="w-8 bg-white h-0.5 block "></span>
        </div>
        <div
          className={`fixed right-0 bottom-0 h-screen w-2/3 bg-gray-800 opacity-95 px-8 pt-32 text-white lg:flex md:absolute lg:h-4 md:justify-start lg:items-center lg:pb-3 md:w-2/4 lg:text-xs ${
            sideMenu ? "block" : "hidden"
          } `}
        >
          <Link to="/">
            <h1 className="mb-7 md:mr-16 tracking-widest text-base">00 HOME</h1>
          </Link>
          <Link to="/destinations">
            <h1 className="mb-7 md:mr-16 tracking-widest text-base">
              01 DESTIONATION
            </h1>
          </Link>
          <Link to="/crew">
            <h1 className="mb-7 md:mr-16 tracking-widest text-base">02 CREW</h1>
          </Link>
          <Link to="/technology">
            <h1 className="mb-7 tracking-widest text-base">03 TECHNOLOGY</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
