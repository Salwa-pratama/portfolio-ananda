"use client";

import React, { useState, useRef } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "motion/react";

export const AnimatedTooltip = ({ items }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const springConfig = { stiffness: 100, damping: 15 };
  const x = useMotionValue(0);
  const animationFrameRef = useRef(null);

  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );

  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );

  const handleMouseMove = (event) => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    animationFrameRef.current = requestAnimationFrame(() => {
      const halfWidth = event.target.offsetWidth / 2;
      x.set(event.nativeEvent.offsetX - halfWidth);
    });
  };

  return (
    <>
      {items.map((item, idx) => (
        <div
          className="group relative -mr-4 cursor-pointer z-10"
          key={item.name}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute -top-16  left-1/2 z-999 flex -translate-x-1/2 flex-col items-center justify-center rounded-md bg-black px-4 py-2 text-xs shadow-xl"
              >
                <div
                  className={`"absolute inset-x-10 -bottom-px z-30 h-px w-[20%] bg-linear-to-r from-transparent ${
                    item.borderVia ?? "via-emerald-400"
                  } to-transparent"`}
                />
                <div
                  className={`"absolute -bottom-px left-10 z-30 h-px w-[40%] bg-linear-to-r from-transparent ${
                    item.borderVia ?? " via-sky-500"
                  } to-transparent"`}
                />
                <div className="relative z-30 text-base font-bold text-white">
                  {item.name}
                </div>
                <div className="text-xs text-white">Persentation Skill</div>
                <div className="border w-full h-2.5">
                  <div
                    style={{ width: item.persentation }}
                    className={` ${
                      item.persentationColor ?? " via-sky-500"
                    } h-full flex items-center justify-center`}
                  >
                    <span className="text-black text-[10px] leading-none">
                      {item.persentation}
                    </span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <img
            onMouseMove={handleMouseMove}
            height={100}
            width={100}
            src={item.image}
            alt={item.name}
            className={`relative m-0! xl:h-14 xl:w-14 h-10 w-10 bg-black/60  rounded-full  object-cover object-top p-1! transition duration-500 group-hover:z-30 group-hover:scale-105`}
          />
        </div>
      ))}
    </>
  );
};
