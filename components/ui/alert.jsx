import { memo, useEffect } from "react";
import { HiCheckCircle } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const Alert = ({ Text, show, onClose }) => {
  useEffect(() => {
    if (show) {
      const audio = new Audio("/sounds/alert.mp3");
      audio.volume = 0.7;
      audio.play();
      const timer = setTimeout(() => {
        onClose();
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 60 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-0 right-0 flex bg-secondary hover:bg-accent-hover py-2 m-10 px-4 rounded-full items-center gap-4 z-50"
        >
          <HiCheckCircle className="text-accent text-xl" />
          <p>{Text}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default memo(Alert);

// <div className="">
//   <HiCheckCircle className="text-accent" />
//   <p>{Text}</p>
// </div>
