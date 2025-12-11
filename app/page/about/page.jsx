"use client";
import { memo } from "react";
import { motion } from "framer-motion";
// import Maintenance from "@/components/Maintenance";
import { ScrollArea } from "@/components/ui/scroll-area";
import Blob from "@/components/Blob";
import avatarImg from "@/public/assets/avatar3.png";
import Image from "next/image";
import Socials from "@/components/Socials";
// components
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Info from "@/components/Info";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="h-screen flex items-center"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center gap-24 w-full h-[680px]">
          {/* Ini Hero About */}
          <div className="w-1/3">
            <div className="hidden xl:block flex-1 w-full  relative z-20 mr-15">
              {/* blobs */}
              <Blob containerStyle="w-full  mx-auto " />
              {/* avatar img */}
              {/* wrapper untuk image + glow */}
              <div className="absolute -top-32 left-[30px]">
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
                  className="rounded-full -top-10"
                />
              </div>
            </div>
            {/* Socials */}
            <div className="hidden xl:flex flex-col w-full justify-center  items-center gap-5">
              <Socials
                containerStyles={
                  "socials min-w-[300] justify-center gap-10 flex"
                }
                iconStyles={
                  "bg-accent text-white hover:bg-accent-hover transition w-8 h-8 text-[22px] flex items-center justify-center rounded-full cursor-pointer"
                }
              />
              <p>Created at 2025</p>
            </div>
          </div>

          {/* Scroll area */}
          <ScrollArea className={"w-full   container h-[680px]"}>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <p>About Me</p>
              </div>
              <h2 className="h2 mb-6">
                <span className="text-accent">Ananda</span> Salwa
              </h2>
              <p className="p text-justify">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
                facilis, voluptates maxime laboriosam atque beatae iusto qui
                repellat nam amet delectus porro nemo libero vero doloremque non
                dolorem quia maiores.
              </p>
              <div className="flex flex-col mt-5 items-start gap-16">
                <Stats />
                <Testimonials />
                <Info />
                <div>journey</div>
                <div>skills</div>
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </motion.section>
  );
};

export default memo(About);
