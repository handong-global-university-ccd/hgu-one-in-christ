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
  const mobRef = useRef<HTMLDivElement | null>(null);

  const handleWheel = () => {
    const fromtoDate = ref.current;
    if (!fromtoDate) return;

    const fromtoDateTop = fromtoDate.getBoundingClientRect().top;

    if (fromtoDateTop < 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleScroll = () => {
    const fromtoDate = mobRef.current;
    if (!fromtoDate) return;

    const fromtoDateTop = fromtoDate.getBoundingClientRect().top;

    if (fromtoDateTop < 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleWheel);
    handleWheel();
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <>
      <div className={`hidden w-full h-[100vh] lg:flex justify-center`}>
        <motion.div
          onMouseEnter={bigEnter}
          onMouseLeave={defaultEnter}
          ref={ref}
          className={`w-full lg:max-w-lg h-[100vh] flex justify-between items-center font-Menda_Medium text-46 text-primary-white`}
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
              stroke="rgb(255, 255, 255)"
              strokeWidth="2"
              variants={draw}
              custom={2}
            />
          </motion.svg>
          <p>2024.10.28</p>
        </motion.div>
      </div>
      {/* 모바일 */}
      <div
        ref={mobRef}
        className={`lg:hidden flex w-full mt-150 justify-center items-center`}
      >
        <div
          className={`flex flex-col items-center font-Menda_Medium text-21 md:text-25 text-primary-white`}
        >
          <p>2024.10.21</p>
          <motion.svg
            width="300"
            height="300"
            viewBox="0 0 300 300"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <motion.line
              x1="150"
              y1="25"
              x2="150"
              y2="275"
              stroke="rgb(255, 255, 255)"
              variants={draw}
              custom={2}
            />
          </motion.svg>
          <p>2024.10.28</p>
        </div>
      </div>
    </>
  );
};

export default ShowDate;
