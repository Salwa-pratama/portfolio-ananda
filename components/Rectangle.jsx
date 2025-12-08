"use client";
import { memo } from "react";
import { animate, delay, motion } from "framer-motion";

const rectangleVariants = {
  initial: (custom) => ({
    y: custom.initialY || "-100%",
    height: custom.initialHeight || "100%",
  }),
  animate: (custom) => ({
    y: custom.animateY || "0%",
    height: custom.animateHeight || "100%",
  }),
  exit: (custom) => ({
    y: custom.exitY || ["0%", "-100%"],
    height: ["0%", "100%"],
  }),
};

const Rectangle = () => {
  return (
    <>
      {/* Layer 1 */}
      <motion.div
        custom={{}}
        variants={rectangleVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          delay: 0,
          duration: 0.6,
          ease: [0.63, 0, 0.17, 1],
        }}
        className="fixed top-full w-screen h-screen z-30 bg-[#1b162b]"
      />

      {/* Layer 2 */}
      <motion.div
        custom={{}}
        variants={rectangleVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          delay: 0.25,
          duration: 0.8,
          ease: [0.63, 0, 0.17, 1],
        }}
        className="fixed top-full w-screen h-screen z-20 bg-[#241e36]"
      />

      {/* Layer 3 */}
      <motion.div
        custom={{}}
        variants={rectangleVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          delay: 0.35,
          duration: 1,
          ease: [0.63, 0, 0.17, 1],
        }}
        className="fixed top-full w-screen h-screen z-10 bg-[#241e36]"
      />

      {/* Layer 4 */}
      <motion.div
        custom={{}}
        variants={rectangleVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          delay: 0.45,
          duration: 1,
          ease: [0.63, 0, 0.17, 1],
        }}
        className="fixed top-full w-screen h-screen z-10 bg-[#2e2743]"
      />
    </>
  );
};

export default memo(Rectangle);
