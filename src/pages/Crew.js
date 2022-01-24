import React, { useState } from "react";
import data from "../data.json";
import { FaCircle } from "react-icons/fa";

const Crew = () => {
  const [crew] = useState(data.crew);
  const [value, setValue] = useState(1);

  const { name, images, role, bio } = crew[value];
  console.log(images.png);

  return (
    <div className="bg-crew-m lg:bg-crew-d h-screen bg-bottom bg-no-repeat bg-cover text-white font-main text-center lg:text-left md:px-24">
      <h1 className="lg:text-3xl lg:p-14 text-2xl p-14">02 MEET YOUR CREW</h1>
      <div className="lg:flex lg:flex-row-reverse lg:h-3/4">
        <div className="lg:w-1/2">
          <div>
            <img src={images.png} alt={name} />
          </div>
        </div>
        <div className="lg:w-1/2 lg:flex lg:flex-col lg:justify-center lg:px-24">
          <div className="flex justify-around my-6 px-24 lg:my-24 lg:w-1/4 lg:px-0 md:px-36">
            {crew.map((item, index) => {
              return (
                <FaCircle
                  key={index}
                  onClick={() => setValue(index)}
                  className="cursor-pointer text-gray-400 hover:text-white"
                />
              );
            })}
          </div>
          <p className="text-gray-400">{role}</p>
          <h1 className="text-4xl">{name}</h1>
          <p className="my-6 lg:leading-loose text-gray-400">{bio}</p>
        </div>
      </div>
    </div>
  );
};

export default Crew;
