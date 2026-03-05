import React from "react";
import bg1 from "../../assets/vector1.png";
import bg2 from "../../assets/vector2.png";

const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 text-white">
      <div className="relative flex-1 text-center bg-linear-to-r from-purple-600 to-purple-400 p-10 rounded-xl">
        <div
          className={`absolute inset-0 bg-no-repeat bg-left bg-contain`}
          style={{ backgroundImage: `url(${bg1})` }}
        ></div>
        <div
          className={`absolute inset-0 bg-no-repeat bg-[url(${bg2})] bg-right bg-contain`}
          style={{ backgroundImage: `url(${bg2})` }}
        ></div>

        <div className="relative">
          <h2 className="text-3xl">In-Progress</h2>
          <h1 className="text-6xl m-4">0</h1>
        </div>
      </div>

      <div className="relative flex-1 text-center bg-linear-to-r from-green-400 to-green-600 p-10 rounded-xl">
        <div
          className={`absolute inset-0 bg-no-repeat bg-left bg-contain`}
          style={{ backgroundImage: `url(${bg1})` }}
        ></div>
        <div
          className={`absolute inset-0 bg-no-repeat bg-[url(${bg2})] bg-right bg-contain`}
          style={{ backgroundImage: `url(${bg2})` }}
        ></div>

        <div>
          <h2 className="text-3xl">Resolved</h2>
          <h1 className="text-6xl m-4">0</h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
