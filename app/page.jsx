"use client";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
// components
import Blob from "@/components/Blob";
import avatarImg from "@/public/assets/avatar3.png";

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
              className="text-accent"
              repeat={Infinity}
              cursor={false}
            />
          </h1>
          <p className="max-w-[500px] mb-11">
            I build cisually captivating, user-friendly websites and web apps
            that transform your ideas into seamless, engaging digital
            experiences.
          </p>
          <button className="btn btn-lg btn-accent mb-16">
            <div>
              <span>Let's talk</span>
            </div>
          </button>
        </div>
        <div className="hidden xl:block flex-1 relative z-20">
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
          {/* <Image
            src={avatarImg}
            alt=""
            width={440}
            height={600}
            quality={100}
            className="absolute -top-37 left-[100px] rounded-full"
          /> */}
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
