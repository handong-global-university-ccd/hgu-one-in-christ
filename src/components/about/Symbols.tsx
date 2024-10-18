import Title from "./Title";
import { motion } from "framer-motion";
import { DOMAIN } from "../../constants/paths";
import { useMousePosition } from "../cursor/Context";

const symbolInfo = [
  {
    id: 1,
    symbol: "(COMMUNICATION DESIGN)",
    imgSrc: "images/about/symbol/commSymbol.webp",
    imgMobSrc: "images/about/symbol/commSymbolMob.webp",
    info: "커뮤니케이션 디자인에서는 메시지가 명확하게 전달되야한다. 사각형은 형태적으로 단순하고 직관적이며, 복잡하지 않아 이해하기 쉽고, 구조적으로 안정적이라는 특성을 지니고 있다.",
  },
  {
    id: 2,
    symbol: "(SERVICE DESIGN)",
    imgSrc: "images/about/symbol/serviceSymbol.webp",
    imgMobSrc: "images/about/symbol/serviceSymbolMob.webp",
    info: "서비스 디자인은 다양한 사용자를 이해하고 여러 이해관계자와 상황을 고려하여 접근해야 한다. 삼각형은 세 변과 세 꼭짓점으로 구성되어 있어 다양한 방식으로 연결되고 변형될 수 있는 특성을 가지고 있다.",
  },
  {
    id: 3,
    symbol: "(UX DESIGN)",
    imgSrc: "images/about/symbol/UXSymbol.webp",
    imgMobSrc: "images/about/symbol/UXSymbolMob.webp",
    info: "UX/UI 디자인에서는 사용자가 제품이나 서비스를 사용하는 과정에서 느끼는 만족감과 편의성을 최대화하는 것이 중요합니다. 원은 중심에서 모든 점이 동일한 거리에 위치하여 균형을 이루고 심리적 안정감을 제공하는 특성으로 UX/UI 디자인의 사용자 경험과 조화를 상징합니다.",
  },
  {
    id: 4,
    symbol: "(INDUSTRIAL DESIGN)",
    imgSrc: "images/about/symbol/productSymbol.webp",
    imgMobSrc: "images/about/symbol/productSymbolMob.webp",
    info: "제품 디자인은 새로운 아이디어와 기능을 통한 혁신적인 접근이 중요하다. 반원은 한쪽이 직선이고 다른 한쪽이 곡면으로 전통적인 원의 안정감을 유지하면서 새로운 접근과 가능성을 탐구할 수 있는 특성을 가지고 있다.",
  },
];

const Symbols = () => {
  const { bigEnter, middleEnter, defaultEnter } = useMousePosition();

  return (
    <>
      <div className={`hidden lg:block w-full lg:max-w-lg mb-[374px]`}>
        <Title>SYMBOLS</Title>
        <motion.div
          onMouseEnter={middleEnter}
          onMouseLeave={defaultEnter}
          className={`relative`}
        >
          <motion.img
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            src={`${DOMAIN}${symbolInfo[0].imgSrc}`}
            className={`absolute top-[47px] left-[620px] w-[273px]`}
          />
          <p
            className={`absolute top-[46px] left-[726px] text-primary-white font-Menda_Medium text-[20px] leading-[120px]`}
          >
            {symbolInfo[0].symbol}
          </p>
          <motion.img
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            src={`${DOMAIN}${symbolInfo[1].imgSrc}`}
            className={`absolute top-[193px] left-[325px] w-[270px]`}
          />
          <p
            className={`absolute top-[185px] left-[202px] text-primary-white font-Menda_Medium text-[20px] leading-[120px]`}
          >
            {symbolInfo[1].symbol}
          </p>
          <motion.img
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            src={`${DOMAIN}${symbolInfo[2].imgSrc}`}
            className={`absolute top-[435px] left-[354px] w-[356px]`}
          />
          <p
            className={`absolute top-[661px] left-[420px] text-primary-white font-Menda_Medium text-[20px] leading-[120px]`}
          >
            {symbolInfo[2].symbol}
          </p>
          <motion.img
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            src={`${DOMAIN}${symbolInfo[3].imgSrc}`}
            className={`absolute top-[316px] left-[604px] w-[315px]`}
          />
          <p
            className={`absolute top-[358px] left-[771px] text-primary-white font-Menda_Medium text-[20px] leading-[120px]`}
          >
            {symbolInfo[3].symbol}
          </p>
        </motion.div>

        <motion.div
          onMouseEnter={bigEnter}
          onMouseLeave={defaultEnter}
          className={`mt-[858px] flex justify-between`}
        >
          {symbolInfo.map((item) => (
            <div
              className={`w-[289px] flex flex-col gap-[10px] text-[16px] text-primary-white ${
                item.symbol.includes("COMMUNICATION")
                  ? "hover:text-primary-orange"
                  : item.symbol.includes("SERVICE")
                    ? "hover:text-primary-red"
                    : item.symbol.includes("UX")
                      ? "hover:text-primary-purple"
                      : "hover:text-primary-blue"
              }`}
            >
              <p className={`font-medium`}>{item.symbol}</p>
              <p
                className={`font-Pretendard_Light leading-[27px] tracking-[-1px]`}
              >
                {item.info}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
      {/* 모바일 버전 */}
      <div
        className={`hidden sm:flex md:flex flex-col w-[90%] h-[1300px] md:h-[1800px]`}
      >
        <Title>SYMBOLS</Title>
        <div className={`flex flex-col gap-[14px] mb-[44px] mt-[10px]`}>
          <img
            src={`${DOMAIN}${symbolInfo[0].imgMobSrc}`}
            className={`w-[201px] md:w-[315px]`}
            alt="comm-image"
          />
          <div
            className={`font-Pretendard_Regular text-[13px] md:text-[16px]  text-primary-orange`}
          >
            <p>커뮤니케이션 디자인에서는 메시지가 명확하게 전달되야한다.</p>
            <p>사각형은 형태적으로 단순하고 직관적이며,</p>
            <p>복잡하지 않아 이해하기 쉽고,</p>
            <p>구조적으로 안정적이라는 특성을 지니고 있다.</p>
          </div>
        </div>
        <div className={`flex flex-col gap-[14px] items-end mb-[44px]`}>
          <img
            src={`${DOMAIN}${symbolInfo[1].imgMobSrc}`}
            className={`w-[173px] md:w-[295px]`}
            alt="comm-image"
          />
          <div
            className={`font-Pretendard_Regular text-[13px] md:text-[16px] text-primary-red text-right`}
          >
            <p>서비스 디자인은 다양한 사용자를 이해하고</p>
            <p>여러 이해관계자와 상황을 고려하여 접근해야 한다.</p>
            <p>삼각형은 세 변과 세 꼭짓점으로 구성되어 있어 다양한</p>
            <p>방식으로 연결되고 변형될 수 있는 특성을 가지고 있다.</p>
          </div>
        </div>
        <div className={`flex flex-col gap-[14px] left-0 mb-[44px]`}>
          <img
            src={`${DOMAIN}${symbolInfo[2].imgMobSrc}`}
            className={`w-[175px] md:w-[300px]`}
            alt="comm-image"
          />
          <div
            className={`font-Pretendard_Regular text-[13px] md:text-[16px] text-primary-purple`}
          >
            <p>UX/UI 디자인에서는 사용자가 제품이나 서비스를 사용하는</p>
            <p>과정에서 느끼는 만족감과 편의성을 최대화하는 것이</p>
            <p>중요합니다. 원은 중심에서 모든 점이 동일한 거리에 </p>
            <p>위치하여 균형을 이루고 심리적 안정감을 제공하는 특성으로</p>
            <p>UX/UI 디자인의 사용자 경험과 조화를 상징합니다.</p>
          </div>
        </div>
        <div className={`w-full flex flex-col gap-[14px] items-end`}>
          <img
            src={`${DOMAIN}${symbolInfo[3].imgMobSrc}`}
            className={`w-[165px] md:w-[290px]`}
            alt="comm-image"
          />
          <div
            className={`font-Pretendard_Regular text-[13px] md:text-[16px] text-primary-blue text-right`}
          >
            <p>제품 디자인은 새로운 아이디어와 기능을 통한</p>
            <p>혁신적인 접근이 중요하다. 반원은 한쪽이 직선이고</p>
            <p>다른 한쪽이 곡면으로 전통적인 원의 안정감을 유지하면서</p>
            <p>새로운 접근과 가능성을 탐구할 수 있는 특성을 가지고 있다.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Symbols;
