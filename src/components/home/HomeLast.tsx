import React, { useState, useEffect } from "react";
import { DOMAIN } from "../../constants/paths";
import { motion } from "framer-motion";
import { useMousePosition } from "../cursor/Context";

const Categories = [
  {
    id: 1,
    name: "COMMUNICATION",
    imgSrc: "images/home/commBigSymbol.webp",
    size: "w-[526px]",
    description:
      "커뮤니케이션 디자인은 브랜딩과 영상기획을 포함한 디자인으로,\n하나의 브랜드를 기획하고 수립하는 과정에서부터 전달하는 과정까지 디자인하고 있습니다.",
  },
  {
    id: 2,
    name: "SERVICE",
    imgSrc: "images/home/serviceBigSymbol.webp",
    size: "w-[559px]",
    description:
      "커뮤니케이션 디자인은 브랜딩과 영상기획을 포함한 디자인으로,\n하나의 브랜드를 기획하고 수립하는 과정에서부터 전달하는 과정까지 디자인하고 있습니다.",
  },
  {
    id: 3,
    name: "UX",
    imgSrc: "images/home/UXBigSymbol.webp",
    size: "w-[642px]",
    description:
      "커뮤니케이션 디자인은 브랜딩과 영상기획을 포함한 디자인으로,\n하나의 브랜드를 기획하고 수립하는 과정에서부터 전달하는 과정까지 디자인하고 있습니다.",
  },
  {
    id: 4,
    name: "PRODUCT",
    imgSrc: "images/home/productBigSymbol.webp",
    size: "w-[634px]",
    description:
      "커뮤니케이션 디자인은 브랜딩과 영상기획을 포함한 디자인으로,\n하나의 브랜드를 기획하고 수립하는 과정에서부터 전달하는 과정까지 디자인하고 있습니다.",
  },
];

const HomeLast: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Categories.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  const Category = Categories[currentIndex];
  const { bigEnter, defaultEnter } = useMousePosition();

  return (
    <motion.div
      onMouseEnter={bigEnter}
      onMouseLeave={defaultEnter}
      className="h-[100vh] relative flex flex-col items-center justify-center"
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
            <div className={`${Category.id === item.id && "hidden"} `} />
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
  );
};

export default HomeLast;
