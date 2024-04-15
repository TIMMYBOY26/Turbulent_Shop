import React, { useState } from "react";
import { i1, i2, i3, i4 } from "../assets/index";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";

const Banner = () => {
  const data = [i1, i2, i3, i4];
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1);
  };
  console.log(currentSlide);

  return (
    <div className="w-full h-auto">
      <div className="w-screen h-[650px] relative">
        <div
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
          className="w-[400vw] h-full flex transition-transform duration-1000"
        >
          <img
            className="w-screen object-cover h-full "
            src={data[0]}
            alt="Img1"
          />
          <img
            className="w-screen object-cover h-full "
            src={data[1]}
            alt="Img2"
          />
          <img
            className="w-screen object-cover h-full "
            src={data[2]}
            alt="Img3"
          />
          <img
            className="w-screen object-cover h-full "
            src={data[3]}
            alt="Img4"
          />
        </div>
        <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44">
          <div
            onClick={prevSlide}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active;bg-gray-900 duration-300"
          >
            <HiArrowLeft />
          </div>
          <div
            onClick={nextSlide}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active;bg-gray-900 duration-300"
          >
            <HiArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
