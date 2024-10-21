import StartContent from "./StartContent";
import { motion } from "framer-motion";
import { DOMAIN } from "../../constants/paths";
import { useMousePosition } from "../cursor/Context";

const Texts = [
  {
    id: 1,
    engContent: "SYNERGIZE",
    korContent: "함께 일해 조화를 이루다",
    delay: 2000,
  },
  {
    id: 2,
    engContent: "SYMPATHY",
    korContent: "마음을 함께하다",
    delay: 4000,
  },
  {
    id: 3,
    engContent: "SYNOECISM",
    korContent: "하나의 공동체로 통합되다",
    delay: 6000,
  },
];

const HomeStart = () => {
  const { bigEnter, defaultEnter } = useMousePosition();

  return (
    <>
      <div
        className={`sm:hidden w-full lg:h-[100vh] flex flex-col items-center`}
      >
        <div
          className={`w-full md:w-[90%] max-w-lg pt-142 mb-0 flex justify-between`}
        >
          {Texts.map((text, idx) => (
            <StartContent
              key={text.id}
              korContent={text.korContent}
              delay={idx * 2500}
            >
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
          className={`lg:max-w-lg md:w-[90%] flex flex-col items-center gap-24`}
        >
          <div className={`relative -z-10 w-screen`}>
            <video
              className=""
              src={`${DOMAIN}images/home/background.mp4`}
              autoPlay
              muted
              loop
            ></video>
            <div
              className={`absolute w-full md:w-[70%] top-[43%] lg:max-w-lg md:w-[90%] left-[50%] -translate-x-[50%]`}
            >
              <img
                src={`${DOMAIN}images/home/mainLogo.webp`}
                className={`w-full`}
                alt="logo"
              />
              <div
                className={`flex flex-col items-center text-primary-white font-Pretendard_Regular text-22 md:text-15 leading-0`}
              >
                <p>2024 HANDONG GLOBAL UNIVERSITY</p>
                <p>CONTENTS CONVERGENCE DESIGN GRADUATION EXHIBITION</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      {/* 모바일 */}
      <div className={`hidden sm:flex mt-64 flex-col items-center`}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 2.5, delay: 0.7 },
          }}
          className={`top-94 flex flex-col items-center w-[90%] gap-15 mt-30`}
        >
          {Texts.map((text) => (
            <div
              className={`w-full flex gap-27 font-Menda_Medium text-15 text-primary-white ${
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

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 2.5, delay: 0.7 },
            }}
            className={`relative flex flex-col font-Pretendard_Regular text-primary-white text-8 leading-11 items-center mt-154`}
          >
            <img
              src={`${DOMAIN}images/home/mainLogoMob.webp`}
              alt="mainLogo"
              className={`w-257 mb-25`}
            />
            <p>2024 HANDONG GLOBAL UNIVERSITY</p>
            <p>CONTENTS CONVERGENCE DESIGN GRADUATION EXHIBITION</p>
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 2.5, delay: 1 },
              }}
              src={`${DOMAIN}images/home/comm.gif`}
              alt="comm-gif"
              className={`w-[35%] absolute top-[-35%] left-[-15%]`}
            />
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 2.5, delay: 1 },
              }}
              src={`${DOMAIN}images/home/industrial.gif`}
              alt="industrial-gif"
              className={`w-[35%] absolute top-[-35%] left-[50%]`}
            />
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 2.5, delay: 1 },
              }}
              src={`${DOMAIN}images/home/service.gif`}
              alt="service-gif"
              className={`w-[35%] absolute top-75 left-[10%]`}
            />
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 2.5, delay: 1 },
              }}
              src={`${DOMAIN}images/home/ux.gif`}
              alt="ux-gif"
              className={`w-[35%] absolute top-80 right-[-20%]`}
            />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default HomeStart;
