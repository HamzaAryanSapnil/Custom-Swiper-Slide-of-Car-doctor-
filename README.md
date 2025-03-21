This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


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

        {/* Custom Navigation Buttons */}
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



