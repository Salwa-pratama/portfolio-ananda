"use client";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
// components
import Blob from "@/components/Blob";
import avatarImg from "@/public/assets/avatar3.png";
import Socials from "@/components/Socials";
import Pattern from "@/components/Pattern";
import Alert from "@/components/ui/alert";
import { useState } from "react";

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="h-screen flex items-center "
    >
      {/* Pattern */}
      <Pattern />
      <div className="flex flex-col xl:flex-row items-center justify-between w-full">
        {/* Text */}

        <div className="w-full xl:w-[550px] flex flex-col items-center xl:items-start text-center xl:text-left">
          <h1 className="h1 flex-1 mb-7">
            Yo! I'm Ananda, <br />
            <TypeAnimation
              sequence={[
                "Full Stack Web Dev!",
                2000,
                "Intermediate Developer!",
                2000,
              ]}
              wrapper="span"
              speed={40}
              className="text-accent xl:text-[40px] text-[20px]"
              repeat={Infinity}
              cursor={false}
            />
          </h1>
          <p className="max-w-[500px] mb-11 text-[12px] xl:text-[15px]">
            I build cisually captivating, user-friendly websites and web apps
            that transform your ideas into seamless, engaging digital
            experiences.
          </p>
          <button className="btn btn-lg btn-accent mb-16">
            <div className="flex gap-3  items-center">
              <span>Let's talk.</span>
              <MdArrowOutward className="text-xl" />
            </div>
          </button>
          {/* Contact Info */}
          <div className="flex flex-col xl:flex-row  xl:items-center gap-4 xl:gap-8 mb-12 xl:mb-0">
            {/* Phone */}
            <div className="flex justify-center xl:justify-items-start items-center gap-2 text-lg ">
              <span className="text-accent">
                <HiOutlinePhone className="text-xm " />
              </span>
              <span className="text-sm ">+62 8986-372-441</span>
            </div>
            {/* Mail */}
            <div className="flex items-center gap-2 text-lg ">
              <span className="text-accent">
                <HiOutlineMail className="text-sm " />
              </span>
              <span className="text-sm ">nandev1915@gmail.com</span>
            </div>
          </div>
          {/* Socials */}
          <Socials
            containerStyles={
              "flex 2xl:flex-col gap-6 xl:hidden 2xl:flex 2xl:absolute 2xl:top-1/2 2xl:right-2 2xl:transform  2xl:-translate-x-1/2 2xl:-translate-y-1/2"
            }
            iconStyles={
              "bg-accent text-white hover:bg-accent-hover transition w-[48] h-[48] text-[22px] flex items-center justify-center rounded-full cursor-pointer"
            }
          />
        </div>
        <div className="hidden xl:block flex-1 relative z-20 mr-15">
          {/* blobs */}
          <Blob containerStyle="w-[560px] h-[560px]" />
          {/* avatar img */}
          {/* wrapper untuk image + glow */}
          <div className="absolute -top-35 left-[110px]">
            {/* glow effect */}
            <div
              className="absolute rounded-full inset-0 z-2 opacity-90"
              style={{
                background:
                  "radial-gradient(circle at bottom, #140e25, transparent 60%)",
                filter: "blur(24px)",
                height: "80%", // biar glow-nya lebih panjang ke bawah
                width: "100%",
                transform: "translateY(30%)", // geser sedikit ke bawah biar fokus glow di bawah
              }}
            />
            {/* avatar */}
            <Image
              src={avatarImg}
              alt="Avatar"
              width={440}
              height={600}
              quality={100}
              className="rounded-full top-30"
            />
          </div>
        </div>
        {/* Alert Donwload cv */}
      </div>
    </motion.section>
  );
};

export default Home;
