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
    console.log(fromtoDateTop);

    if (fromtoDateTop < 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`sm:hidden w-full h-[100vh] flex justify-center`}>
        <motion.div
          onMouseEnter={bigEnter}
          onMouseLeave={defaultEnter}
          ref={ref}
          className={`w-full lg:max-w-lg h-[100vh] flex justify-between items-center font-Menda_Medium text-[46px] text-primary-white`}
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
      </div>
      <div
        className={`hidden sm:flex w-full h-[100vh] justify-center items-center`}
      >
        <div
          className={`flex flex-col items-center font-Menda_Medium text-[21px] text-primary-white`}
        >
          <p>2024.10.21</p>
          <motion.svg
            width="300"
            height="350"
            viewBox="250 0 100 350"
            initial="hidden"
            animate="visible"
          >
            <motion.line
              x1="300"
              y1="50"
              x2="300"
              y2="300"
              stroke="#ffffff"
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
