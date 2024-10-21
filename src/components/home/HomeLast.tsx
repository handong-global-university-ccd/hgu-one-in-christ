import React, { useState, useEffect } from "react";
import { DOMAIN } from "../../constants/paths";
import { motion } from "framer-motion";
import { useMousePosition } from "../cursor/Context";
import { Categories } from "../../constants/categories";

const HomeLast: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Categories.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const Category = Categories[currentIndex];
  const { bigEnter, defaultEnter } = useMousePosition();

  return (
    <>
      <motion.div
        onMouseEnter={bigEnter}
        onMouseLeave={defaultEnter}
        className="hidden lg:h-[100vh] relative lg:flex flex-col items-center justify-center"
      >
        <div className={`flex flex-col gap-30`}>
          {Categories.map((item) => (
            <div className={`flex gap-38 items-center`}>
              <p
                className={`w-510 text-right font-Menda_Medium text-primary-white text-46`}
              >
                {item.name}
              </p>
              <img
                src={`${DOMAIN}images/home/homeCircle.webp`}
                className={`w-8 h-8 ${Category.id !== item.id && "hidden"}`}
              />
              <p
                className={`${
                  Category.id !== item.id && "hidden"
                } font-Menda_Medium text-primary-white text-46`}
              >
                (DESIGN)
              </p>
            </div>
          ))}
        </div>
        {Categories.map((item) => (
          <motion.img
            key={item.id}
            src={`${DOMAIN}${item.imgSrc}`}
            className={`absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] -z-20 ${
              item.size
            } ${item.id !== Category.id && "hidden"}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: item.id === Category.id ? 1 : 0 }}
            transition={{ duration: 1 }}
          />
        ))}
        <p
          className={`absolute bottom-140 whitespace-pre-wrap text-center text-18 text-primary-white font-Pretendard_Regular `}
        >
          {Category.description}
        </p>
      </motion.div>
      {/* 모바일 */}
      <div className="lg:hidden flex relative flex-col items-center justify-center mb-270 mt-150">
        <div className={`flex flex-col gap-15 md:gap-20`}>
          {Categories.map((item) => (
            <div className={`flex gap-12 md:gap-15 items-center`}>
              <p
                className={`w-163 md:w-280 text-right font-Menda_Medium text-primary-white text-15 md:text-25`}
              >
                {item.name}
              </p>
              <img
                src={`${DOMAIN}images/home/homeCircle.webp`}
                className={`w-3 h-3 md:w-5 md:h-5 ${
                  Category.id !== item.id && "hidden"
                }`}
              />
              <p
                className={`${
                  Category.id !== item.id && "hidden"
                } font-Menda_Medium text-primary-white text-15 md:text-25`}
              >
                (DESIGN)
              </p>
            </div>
          ))}
        </div>
        {Categories.map((item) => (
          <motion.img
            key={item.id}
            src={`${DOMAIN}${item.imgSrc}`}
            className={`absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] -z-20 ${
              item.mobSize
            } ${item.id !== Category.id && "hidden"}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: item.id === Category.id ? 1 : 0 }}
            transition={{ duration: 1 }}
          />
        ))}
        <p
          className={`absolute bottom-[-100px] whitespace-pre-wrap text-center text-10 md:text-12 text-primary-white font-Pretendard_Regular `}
        >
          {Category.mobDescription}
        </p>
      </div>
    </>
  );
};

export default HomeLast;
