"use client";
import { memo } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper/modules";
import { Quotes } from "@/app/models/Links";
// swiper style
import "swiper/css";
import "swiper/css/pagination";
import { ImQuotesLeft } from "react-icons/im";

const Testimonials = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      loop={true}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      className="w-full max-w-[310px] cursor-pointer mt-0 md:max-w-[520px] bg-secondary rounded-lg"
    >
      {Quotes.map((quote, index) => {
        return (
          <SwiperSlide key={index} className=" p-2 relative">
            <div className="flex gap-10 h-[120px] items-center ">
              <ImQuotesLeft className="text-[50px] text-accent w-1/3" />
              <p className="text-sm  w-full text-justify pr-10 line-clamp-2">
                {quote.message}
              </p>
              <p className=" w-full absolute bottom-0 right-5  text-right text-accent">
                {quote.name}
              </p>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default memo(Testimonials);
