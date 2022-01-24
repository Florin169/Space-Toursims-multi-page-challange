import React, { useState } from "react";
import data from "../data.json";

const Technology = () => {
  const [tech] = useState(data.technology);
  const [value, setValue] = useState(0);

  const { name, images, description } = tech[value];
  console.log(images.landscape);

  return (
    <div className="bg-tech-m lg:bg-tech-d h-screen bg-bottom bg-no-repeat bg-cover text-white font-main text-center lg:text-left md:px-24">
      <h1 className="py-9 lg:px-24 lg:w-1/2 lg:py-16 lg:text-3xl text-2xl">
        03 SPACE LAUNCH 101
      </h1>
      <div className="lg:flex lg:flex-row-reverse lg:h-3/4">
        <div className="w-1/2">
          <img src={images.landscape} alt={name} />
        </div>
        <div className="lg:w-1/2 lg:flex lg:justify-center lg:items-center">
          <div className="flex justify-around px-24 my-9 lg:flex-col lg:pr-14 lg:my-0 md:px-36">
            {tech.map((item, index) => {
              return (
                <div
                  className="w-9 lg:w-16 h-9 lg:h-16 rounded-full border border-white flex justify-center items-center lg:mb-7 hover:bg-white hover:text-black cursor-pointer"
                  key={index}
                  onClick={() => setValue(index)}
                >
                  {index + 1}
                </div>
              );
            })}
          </div>
          <div>
            <p className="lg:tracking-wide text-gray-400">THE TECHNOLOGY...</p>
            <h1 className="text-4xl lg:text-6xl">{name}</h1>
            <p className="my-6 lg:w-2/3 text-gray-400">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
