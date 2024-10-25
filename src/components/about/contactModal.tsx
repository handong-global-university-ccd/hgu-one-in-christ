import { useState } from "react";
import { useMousePosition } from "../cursor/Context";
import { motion } from "framer-motion";

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
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      onMouseEnter={smallEnter}
      onMouseLeave={defaultEnter}
      className={`fixed left-40 ${
        isOpen
          ? "bottom-40 -translate-y duration-700"
          : "bottom-[-274px] translate-y duration-700"
      }  w-220 flex flex-col tracking-[-1px] bg-primary-black`}
      onClick={handleOpen}
    >
      <div
        className={`w-full h-36 bg-primary-white rounded-t-30 font-Organetto_ExtBold text-center inline-flex items-center justify-center text-primary-black text-14`}
      >
        CONTACT
      </div>
      <div
        className={`w-full flex flex-col items-center
				rounded-b-30 border border-primary-white text-primary-white text-14`}
      >
        {LEADER.map((item, i, leader) => (
          <div
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
  );
};

export default ContactModal;
