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
    }, 5000);

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
        <div className={`flex flex-col gap-[30px]`}>
          {Categories.map((item) => (
            <div className={`flex gap-[38px] items-center`}>
              <p
                className={`w-[510px] text-right font-Menda_Medium text-primary-white text-[46px]`}
              >
                {item.name}
              </p>
              <img
                src={`${DOMAIN}images/home/homeCircle.webp`}
                className={`w-[8px] h-[8px] ${
                  Category.id !== item.id && "hidden"
                }`}
              />
              <p
                className={`${
                  Category.id !== item.id && "hidden"
                } font-Menda_Medium text-primary-white text-[46px]`}
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
          className={`absolute bottom-[140px] whitespace-pre-wrap text-center text-[18px] text-primary-white font-Pretendard_Regular `}
        >
          {Category.description}
        </p>
      </motion.div>
      {/* 모바일 */}
      <div className="lg:hidden flex relative flex-col items-center justify-center mb-[270px] mt-[150px]">
        <div className={`flex flex-col gap-[15px] md:gap-[20px]`}>
          {Categories.map((item) => (
            <div className={`flex gap-[12px] md:gap-[15px] items-center`}>
              <p
                className={`w-[163px] md:w-[280px] text-right font-Menda_Medium text-primary-white text-[15px] md:text-[25px]`}
              >
                {item.name}
              </p>
              <img
                src={`${DOMAIN}images/home/homeCircle.webp`}
                className={`w-[3px] h-[3px] md:w-[5px] md:h-[5px] ${
                  Category.id !== item.id && "hidden"
                }`}
              />
              <p
                className={`${
                  Category.id !== item.id && "hidden"
                } font-Menda_Medium text-primary-white text-[15px] md:text-[25px]`}
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
          className={`absolute bottom-[-100px] whitespace-pre-wrap text-center text-[10px] md:text-[12px] text-primary-white font-Pretendard_Regular `}
        >
          {Category.mobDescription}
        </p>
      </div>
    </>
  );
};

export default HomeLast;
