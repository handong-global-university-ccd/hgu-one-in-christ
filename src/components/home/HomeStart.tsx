import StartContent from "./StartContent";
import { motion } from "framer-motion";
import { DOMAIN } from "../../constants/paths";
import { useMousePosition } from "../cursor/Context";

const Texts = [
  {
    id: 1,
    engContent: "SYNERGIZE",
    korContent: "함께 일해 조화를 이루다",
  },
  {
    id: 2,
    engContent: "SYMPATHY",
    korContent: "마음을 함께하다",
  },
  {
    id: 3,
    engContent: "SYNOECISM",
    korContent: "하나의 공동체로 통합되다",
  },
];

const HomeStart = () => {
  const { bigEnter, defaultEnter } = useMousePosition();

  return (
    <>
      <div className={`sm:hidden w-full h-[100vh] flex flex-col items-center`}>
        <div
          className={`w-full max-w-lg pt-[142px] mb-[268px] flex justify-between`}
        >
          {Texts.map((text) => (
            <StartContent korContent={text.korContent}>
              {text.engContent}
            </StartContent>
          ))}
        </div>
        <motion.div
          onMouseEnter={bigEnter}
          onMouseLeave={defaultEnter}
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 2.5, delay: 0.7 },
          }}
          className={`lg:max-w-lg flex flex-col items-center gap-[24px]`}
        >
          <img
            src={`${DOMAIN}images/home/mainLogo.webp`}
            className={`w-full`}
            alt="logo"
          />
          <div
            className={`flex flex-col items-center text-primary-white font-Pretendard_Regular text-[22px] leading-0`}
          >
            {/* 폰트 변경하지 말것 */}
            <p>2024 HANDONG GLOBAL UNIVERSITY</p>
            <p>CONTENTS CONVERGENCE DESIGN GRADUATION EXHIBITION</p>
          </div>
        </motion.div>
      </div>
      <div
        className={`relative hidden sm:flex h-[100vh] pd-[64px] flex-col items-center`}
      >
        <div
          className={`absolute top-[100px] flex flex-col items-center w-[90%] gap-[15px] pd-[30px]`}
        >
          {Texts.map((text) => (
            <div
              className={`w-full flex gap-[27px] font-Menda_Medium text-[15px] text-primary-white ${
                text.id === 1
                  ? "justify-start"
                  : text.id === 2
                    ? "justify-center"
                    : "justify-end"
              }`}
            >
              <p>(</p>
              <p>{text.engContent}</p>
              <p>)</p>
            </div>
          ))}

          <div
            className={`absolute flex flex-col font-Pretendard_Regular text-primary-white text-[8px] leading-[11px] items-center top-[30vh]`}
          >
            <img
              src={`${DOMAIN}images/home/mainLogoMob.webp`}
              alt="mainLogo"
              className={`w-[257px] mb-[25px]`}
            />
            <p>2024 HANDONG GLOBAL UNIVERSITY</p>
            <p>CONTENTS CONVERGENCE DESIGN GRADUATION EXHIBITION</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeStart;
