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
      className="w-full max-w-[310px] cursor-pointer md:max-w-[520px] bg-secondary rounded-lg"
    >
      {Quotes.map((quote, index) => {
        return <SwiperSlide key={index}>{quote.message}</SwiperSlide>;
      })}
    </Swiper>
  );
};

export default memo(Testimonials);
