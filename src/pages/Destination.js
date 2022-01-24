import React, { useState } from "react";
import data from "../data.json";

const Destination = () => {
  const [planets] = useState(data.destinations);
  const [value, setValue] = useState(0);

  const { name, images, description, distance, travel } = planets[value];

  return (
    <div className="h-screen p-6 font-main bg-dest-m bg-no-repeat bg-cover text-white lg:flex lg:bg-dest-d ">
      <div className="text-center lg:w-1/2 lg:flex lg:flex-col lg:justify-center">
        <h1 className="lg:text-3xl tracking-widest md:text-2xl md:pt-10">
          01 PICK YOUR DESTINATION
        </h1>
        <img src={images.webp} alt={name} />
      </div>
      <div className="lg:w-1/2  lg:px-24 lg:flex lg:flex-col lg:justify-center md:px-24">
        <div className="flex justify-around items-center px-8 my-10 text-gray-400 lg:w-3/4 lg:px-0 md:px-40">
          {planets.map((planet, index) => {
            return (
              <button key={index} onClick={() => setValue(index)}>
                {planet.name}
              </button>
            );
          })}
        </div>
        <h1 className="text-center my-5 text-6xl lg:text-left">{name}</h1>
        <p className="text-center my-4 lg:text-left text-gray-400">
          {description}
        </p>
        <div className="w-full bg-gray-500 h-px my-8"></div>
        <div className="lg:flex lg:justify-between lg:items-center lg:w-2/3 lg:mt-8 ">
          <div className="text-center text-lg lg:text-left">
            <p className="text-sm text-gray-400">AVG. DISTANCE</p>
            <p className="text-2xl">{distance}</p>
          </div>
          <div className="text-center mt-6 text-lg lg:text-left lg:mt-0 ">
            <p className="text-sm text-gray-400">AVG. TRAVEL</p>
            <p className="text-2xl">{travel}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
