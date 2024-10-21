import React, { useState, useEffect } from "react";
import { useMousePosition } from "../cursor/Context";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  children: React.ReactNode;
  korContent: string;
  delay: number;
}

const StartContent = ({ children, korContent, delay }: Props) => {
  const { middleEnter, defaultEnter } = useMousePosition();
  const [showKorContent, setShowKorContent] = useState(false);

  useEffect(() => {
    const initialTimeout = setTimeout(() => {
      setShowKorContent(true);
      setTimeout(() => setShowKorContent(false), 2000);

      const interval = setInterval(() => {
        setShowKorContent(true);
        setTimeout(() => setShowKorContent(false), 2000); // 2초 동안 한국어 표시
      }, 8000); // 8초 주기

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(initialTimeout);
  }, []);

  return (
    <motion.div
      onMouseEnter={middleEnter}
      onMouseLeave={defaultEnter}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 4, delay: 0.2 } }}
      className={`relative flex justify-between w-272 text-26 text-primary-white font-Menda_Medium`}
    >
      <p>(</p>
      <AnimatePresence>
        {showKorContent ? (
          <motion.p
            key="korContent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={`absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] font-Pretendard_Regular text-23 w-250 text-center`}
          >
            {korContent}
          </motion.p>
        ) : (
          <motion.p
            key="children"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={`absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]`}
          >
            {children}
          </motion.p>
        )}
      </AnimatePresence>
      <p>)</p>
    </motion.div>
  );
};

export default StartContent;
