"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import { Navigation } from "swiper/modules";
import { useRef, useState } from "react";
export default function Home() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
  const images = [
    {
      img: "https://i.ibb.co.com/vxcbTsg/cat-s-care.jpg",
      title: "First Image",
    },
    {
      img: "https://i.ibb.co.com/Pm5DszC/amazing-bengal-tiger-nature.jpg",
      title: "Second Image",
    },
    {
      img: "https://i.ibb.co.com/vxcbTsg/cat-s-care.jpg",
      title: "Third Image",
    },
    {
      img: "https://i.ibb.co.com/vxcbTsg/cat-s-care.jpg",
      title: "Fourth Image",
    },
  ];
  return (
    <main className="relative">
      <Swiper
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                backgroundImage: `url(${item.img})`,
                // backgroundRepeat: "no-repeat",
                // backgroundPosition: "center",
                // backgroundSize: "cover",
              }}
              className="h-[550px] w-full flex justify-center items-center bg-cover bg-center bg-no-repeat md:h-[400px] sm:h-[300px]"
            >
              <h2 className="text-white text-lg font-bold bg-black/60 p-2 rounded-lg">
                {item.title}
              </h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="absolute right-4 bottom-4 flex space-x-2 z-10">
        <button
          ref={prevRef}
          onClick={() => swiperRef.current?.slidePrev()}
          className={`p-3 rounded-full  bg-black bg-opacity-25 transition 
            ${
              isBeginning
                ? "bg-gray-400 cursor-not-allowed"
                : " text-white hover:bg-orange-600"
            }`}
          disabled={isBeginning}
        >
          Prev
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          ref={nextRef}
          className={`p-3 rounded-full backdrop-blur-sm transition 
            ${
              isEnd
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-black/25 text-white hover:bg-orange-600"
            }`}
          disabled={isEnd}
        >
          Next
        </button>
      </div>
    </main>
  );
}
