import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-hero-m lg:bg-hero-d h-screen bg-bottom bg-no-repeat bg-cover font-main lg:flex ">
      <div className="text-white flex flex-col items-center justify-center p-8 lg:w-1/2 lg:items-start lg:pl-36 ">
        <h1 className="tracking-wide lg:text-left text-gray-400 lg:text-xl">
          SO, YOU WANT TO TRAVEL TO
        </h1>
        <h1 className="my-7 text-8xl lg:text-9xl font-thin">SPACE</h1>
        <p className="leading-loose tracking-wide lg:w-2/3 text-gray-400">
          Let's face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it.Well sit
          back, and relax because we'll give you a trully out of this world
          experience!
        </p>
      </div>
      <div className="flex items-center justify-center mt-20 lg:w-1/2">
        <Link to="/destinations">
          <button className="bg-white w-56 h-56 rounded-full text-3xl tracking-widest ">
            EXPLORE
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
