import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useMousePosition } from "../cursor/Context";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: () => {
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { type: "spring", duration: 3, bounce: 0 },
        opacity: { duration: 0.01 },
      },
    };
  },
};

const ShowDate = () => {
  const { bigEnter, defaultEnter } = useMousePosition();

  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    const fromtoDate = ref.current;
    if (!fromtoDate) return;

    const fromtoDateTop = fromtoDate.getBoundingClientRect().top;
    const scrollTop = ref.current?.scrollTop;
    console.log(scrollTop);

    if (fromtoDateTop < 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      onMouseEnter={bigEnter}
      onMouseLeave={defaultEnter}
      ref={ref}
      className={`h-[100vh] flex justify-between items-center font-Menda_Medium text-[46px] text-primary-white`}
    >
      <p>2024.10.21</p>
      <motion.svg
        width="656"
        height="28"
        viewBox="0 0 656 28"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <motion.line
          x1="0"
          y1="14"
          x2="656"
          y2="14"
          stroke="#ffffff"
          strokeWidth="2"
          variants={draw}
          custom={2}
        />
      </motion.svg>
      <p>2024.10.28</p>
    </motion.div>
  );
};

export default ShowDate;
