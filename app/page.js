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
{/*

# You can also use this feedback slider. Just Copy and paste this component. It's a nextjs component. It is also responsible


"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./sliderStyle.css";
import { Navigation, Autoplay } from "swiper/modules";
import { useRef, useState } from "react";

const FeedBackSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const feedbacks = [
    {
      rating: 5,
      date: "Feb 7, 2024",
      text: "Great for beginner to intermediate social media managers, an example when Hootsuite is perfect is when you are still learning campaign management targets, the analytics are really great.",
      name: "Joanne Valley Hignett",
      role: "Digital Marketing Specialist",
      company: "Chandos Construction",
      employees: "501-1000 employees",
    },
    {
      rating: 5,
      date: "Feb 13, 2024",
      text: "Hootsuite has helped my company reach our target audience on multiple trending social media platforms. Even for an individual with a beginner to intermediate experience with business aspects of social media, this bundled tool allows you to reach your target audience with ease with consideration for time efficiency and practicality.",
      name: "Zaina Kroschinski",
      role: "Customer Service Specialist",
      company: "Remax Excellence Rental Advisors",
      employees: "Real Estate | 11-50 employees",
    },
    {
      rating: 5,
      date: "Jan 12, 2024",
      text: "As a busy financial security advisor, I couldn’t have time to handle my social media. On the other hand, I needed to be active on social media. Hootsuite helped me to manage my platforms easily and saved a lot of my time. than you Hootsuite!",
      name: "Abdollah Safavi",
      role: "Financial Advisor",
      company: "Freedom 55 Financial",
      employees: "1001-5000 employees",
    },
    {
      rating: 5,
      date: "Jan 12, 2024",
      text: "As a busy financial security advisor, I couldn’t have time to handle my social media. On the other hand, I needed to be active on social media. Hootsuite helped me to manage my platforms easily and saved a lot of my time. than you Hootsuite!",
      name: "Abdollah Safavi",
      role: "Financial Advisor",
      company: "Freedom 55 Financial",
      employees: "1001-5000 employees",
    },
    {
      rating: 5,
      date: "Jan 12, 2024",
      text: "As a busy financial security advisor, I couldn’t have time to handle my social media. On the other hand, I needed to be active on social media. Hootsuite helped me to manage my platforms easily and saved a lot of my time. than you Hootsuite!",
      name: "Abdollah Safavi",
      role: "Financial Advisor",
      company: "Freedom 55 Financial",
      employees: "1001-5000 employees",
    },
    {
      rating: 5,
      date: "Jan 12, 2024",
      text: "As a busy financial security advisor, I couldn’t have time to handle my social media. On the other hand, I needed to be active on social media. Hootsuite helped me to manage my platforms easily and saved a lot of my time. than you Hootsuite!",
      name: "Abdollah Safavi",
      role: "Financial Advisor",
      company: "Freedom 55 Financial",
      employees: "1001-5000 employees",
    },
    {
      rating: 5,
      date: "Jan 12, 2024",
      text: "As a busy financial security advisor, I couldn’t have time to handle my social media. On the other hand, I needed to be active on social media. Hootsuite helped me to manage my platforms easily and saved a lot of my time. than you Hootsuite!",
      name: "Abdollah Safavi",
      role: "Financial Advisor",
      company: "Freedom 55 Financial",
      employees: "1001-5000 employees",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 font-roboto my-10">
      <div className="relative">
        <Swiper
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
            // swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >
          {feedbacks.map((item, index) => (
            <SwiperSlide key={index}>
              <Card className="p-1 md:p-6 shadow-lg rounded-lg text-center flex flex-col justify-center items-center h-96">
                <CardContent>
                  <div className="text-red-500 text-lg flex justify-center gap-1">
                    {Array(item.rating).fill("⭐")}
                  </div>
                  <p className="italic text-gray-600 mt-2">{item.text.length > 100 ? item.text.slice(0, 100) + "..." : item.text}</p>
                  <h4 className="font-bold mt-4">{item.name}</h4>
                  <p className="text-sm text-gray-500">
                    {item.role} <br /> {item.company} | {item.employees}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">{item.date}</p>
                  <a href="#" className="text-blue-500 mt-2 hover:underline">
                    Read full review →
                  </a>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>

        //? Custom Navigation Buttons 
        <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between px-4 z-10">
          <button
            ref={prevRef}
            className="p-3 rounded-full text-white bg-orange-600 hover:bg-seo-primary "
          >
            <ChevronLeft size={24} />
          </button>
          <button
            ref={nextRef}
            className="p-3 rounded-full  text-white bg-orange-600 hover:bg-seo-primary"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedBackSlider;



*/}
