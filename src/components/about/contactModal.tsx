import { useEffect, useState } from "react";
import { useMousePosition } from "../cursor/Context";
import { AnimatePresence, motion } from "framer-motion";
import { DOMAIN } from "../../constants/paths";

const LEADER = [
  {
    id: 1,
    name: "서하령",
    position: "전시 위원장",
    email: "shr504@naver.com",
  },
  {
    id: 2,
    name: "고수영",
    position: "웹사이트 팀장",
    email: "suyoungkko@gmail.com",
  },
  {
    id: 3,
    name: "박민지",
    position: "개발자",
    email: "minzzi0068@gmail.com",
  },
];

const ContactModal = () => {
  const { smallEnter, defaultEnter } = useMousePosition();
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = () => {
    const mainTop = window.scrollY;

    if (mainTop > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <motion.div
        onMouseEnter={smallEnter}
        onMouseLeave={defaultEnter}
        className={`hidden lg:block fixed left-40 ${
          isOpen
            ? "bottom-40 -translate-y duration-700"
            : "bottom-[-274px] translate-y duration-700"
        } w-220 flex flex-col tracking-[-1px] bg-primary-black`}
      >
        <div
          className={`w-full h-36 bg-primary-white rounded-t-30 font-Organetto_ExtBold text-center inline-flex items-center justify-center text-primary-black text-14`}
          onClick={handleOpen}
        >
          CONTACT
        </div>
        <div
          className={`w-full flex flex-col items-center
					rounded-b-30 border border-primary-white text-primary-white text-14`}
        >
          {LEADER.map((item, i, leader) => (
            <div
              key={item.id}
              className={`w-171 flex flex-col py-15 mx-25 leading-[30px] ${
                leader.length - 1 !== i && "border-b"
              } border-primary-white`}
            >
              <p className={`font-Pretendard_Bold`}>{item.position}</p>
              <div className={`flex gap-16 font-Pretendard_Regular`}>
                <p>{item.name}</p>
                <a
                  href={`mailto:${item.email}?subject=한동대학교 콘텐츠융합디자인학부 졸업전시 문의`}
                  className={`text-12 tracking-0`}
                >
                  {item.email}
                </a>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
      {/* 태블릿, 모바일 */}
      <div
        className={`lg:hidden fixed bottom-[5%] left-[5%] flex flex-col items-start gap-10  ${
          isVisible ? "fixed" : "hidden"
        }`}
      >
        {isOpen && (
          <AnimatePresence>
            <motion.div
              key="contact-button"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 1 }}
              className={`flex flex-col gap-8 ml-6 `}
            >
              {LEADER.map((item) => (
                <a
                  key={item.id}
                  href={`mailto:${item.email}?subject=한동대학교 콘텐츠융합디자인학부 졸업전시 문의`}
                  className={`w-109 h-40 flex gap-7 items-center bg-primary-white rounded-20 p-8`}
                >
                  <img
                    src={`${DOMAIN}images/about/arrowIconMob.webp`}
                    alt="arrow icon"
                    className={`w-25`}
                  />
                  <div className={`flex flex-col items-start`}>
                    <p className={`font-Pretendard_Bold text-9`}>{item.name}</p>
                    <p className={`font-Pretendard_Regular text-9`}>
                      {item.position}
                    </p>
                  </div>
                </a>
              ))}
            </motion.div>
          </AnimatePresence>
        )}
        {isOpen ? (
          <img
            src={`${DOMAIN}images/about/contactCloseIconMob.webp`}
            alt="close icon"
            className={`w-50 h-50`}
            onClick={handleOpen}
          />
        ) : (
          <img
            src={`${DOMAIN}images/about/contactIconMob.webp`}
            alt="contact icon"
            className={`w-50 h-50`}
            onClick={handleOpen}
          />
        )}
      </div>
    </>
  );
};

export default ContactModal;
