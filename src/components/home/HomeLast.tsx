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
    mobSize: "w-[203px]",
    description:
      "커뮤니케이션 디자인은 다양한 시각적 표현을 활용하여 메시지를 명확하고 효과적으로 전달하는 디자인 분야로\n이를 통해 대중과의 공감을 이끌어내는 데에 중점을 둔다",
    mobDescription:
      "커뮤니케이션 디자인은 다양한 시각적 표현을 활용하여 메시지를\n명확하고 효과적으로 전달하는 디자인 분야로\n이를 통해 대중과의 공감을 이끌어내는 데에 중점을 둔다",
  },
  {
    id: 2,
    name: "SERVICE",
    imgSrc: "images/home/serviceBigSymbol.webp",
    size: "w-[559px]",
    mobSize: "w-[223px]",
    description:
      "서비스 디자인은 사용자의 경험을 중심으로 문제를 정의하고 서비스 시스템과 프로세스를 개선하며\n사용자 니즈를 충족하는 적합한 솔루션을 설계한다",
    mobDescription:
      "서비스 디자인은 사용자의 경험을 중심으로 문제를 정의하고\n서비스 시스템과 프로세스를 개선하며\n사용자 니즈를 충족하는 적합한 솔루션을 설계한다",
  },
  {
    id: 3,
    name: "UX",
    imgSrc: "images/home/UXBigSymbol.webp",
    size: "w-[642px]",
    mobSize: "w-[282px]",
    description:
      "User experience 디자인은 사용자가 제품이나 서비스를 이용할 때의 경험을 총체적으로 설계한다\n사용자의 Context를 이해하고, 이를 기반으로 새롭고 가치 있는 경험을 창출하는 데 중점을 둔다",
    mobDescription:
      "User experience 디자인은 사용자가 제품이나 서비스를\n이용할 때의 경험을 총체적으로 설계한다\n사용자의 Context를 이해하고, 이를 기반으로 새롭고\n가치 있는 경험을 창출하는 데 중점을 둔다",
  },
  {
    id: 4,
    name: "INDUSTRIAL",
    imgSrc: "images/home/productBigSymbol.webp",
    size: "w-[634px]",
    mobSize: "w-[273px]",
    description:
      "산업 디자인은 인간공학적 사용성과 외형 감성 품질을 연구하여 혁신적인 제품을 개발하며\n사용자와 시장의 요구를 반영하여 기능적이고 매력적인 제품을 발명한다",
    mobDescription:
      "산업 디자인은 인간공학적 사용성과 외형 감성 품질을\n연구하여 혁신적인 제품을 개발하며\n사용자와 시장의 요구를 반영하여 기능적이고 매력적인 제품을 발명한다",
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
    <>
      <motion.div
        onMouseEnter={bigEnter}
        onMouseLeave={defaultEnter}
        className="sm:hidden lg:h-[100vh] relative flex flex-col items-center justify-center"
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
      <div className="hidden sm:flex relative flex-col items-center justify-center mb-[270px] mt-[150px]">
        <div className={`flex flex-col gap-[15px]`}>
          {Categories.map((item) => (
            <div className={`flex gap-[12px] items-center`}>
              <p
                className={`w-[163px] text-right font-Menda_Medium text-primary-white text-[15px]`}
              >
                {item.name}
              </p>
              <img
                src={`${DOMAIN}images/home/homeCircle.webp`}
                className={`w-[3px] h-[3px] ${
                  Category.id !== item.id && "hidden"
                }`}
              />
              <p
                className={`${
                  Category.id !== item.id && "hidden"
                } font-Menda_Medium text-primary-white text-[15px]`}
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
          className={`absolute bottom-[-100px] whitespace-pre-wrap text-center text-[10px] text-primary-white font-Pretendard_Regular `}
        >
          {Category.mobDescription}
        </p>
      </div>
    </>
  );
};

export default HomeLast;
