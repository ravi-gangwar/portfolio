"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { PiArrowLeftThin, PiArrowRightThin } from "react-icons/pi";

interface CarouselProps {
  slides: string[]; // Array of image URLs
  autoSlide?: boolean;
  autoSlideInterval?: number;
}

const slides = ['/greenEarth.png', '/greenEarth2.png'];

const Carousel: React.FC<CarouselProps> = ({
  autoSlide = false,
  autoSlideInterval = 3000,
}) => {
  const [curr, setCurr] = useState(0);

  const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval]);

  return (
    <div className="flex relative flex-col items-center lg:min-w-[100%] mt-20">
      <div className="w-full max-w-full overflow-hidden flex items-center">
        {slides.map((slide, index) => (
          <div onMouseLeave={() => console.log("OUT")} onMouseEnter={() => console.log("IN")} key={index} style={{ transform: `translateX(-${curr * 100}%)` }} className="w-full cursor-pointer lg:w-[700px] flex-shrink-0 p-2 transition-transform duration-500 ease-out">
            <Image
              src={slide}
              width={1000}
              height={500}
              alt={`Slide ${index + 1}`}
              className="w-full object-cover rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-evenly items-center mt-5 min-w-full">
  
        <button
          onClick={prev}
          className="p-3 rounded-full text-zinc-50 shadow-lg border-2 hover:text-zinc-800 border-zinc-50 hover:bg-zinc-200"
        >
          <PiArrowLeftThin size={30} />
        </button>

        <div className="flex items-center justify-center gap-2 mt-4">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`
              transition-all duration-200 w-4 h-4 rounded-full
              ${curr === i ? "border-2 border-zinc-50 shadow-md" : "bg-zinc-50 p-1 lg:p-3"}
            `}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="p-3 rounded-full text-zinc-50 shadow-lg border-2 hover:text-zinc-800 border-zinc-50 hover:bg-zinc-200"
        >
          <PiArrowRightThin size={30} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;