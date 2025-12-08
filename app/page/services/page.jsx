"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import Maintenance from "@/components/Maintenance";
const Services = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
    >
      <Maintenance />
    </motion.section>
  );
};

export default memo(Services);
