import { PROFESSOR } from "../../constants/professor";
import { useMousePosition } from "../cursor/Context";
import Professor from "./Professor";
import { motion } from "framer-motion";
import Title from "./Title";

const ThanksTo = () => {
  const { smallEnter, defaultEnter } = useMousePosition();
  return (
    <div
      className={`flex flex-col items-center md:w-[90%] sm:w-[90%] mb-[170px] lg:mb-[344px] `}
    >
      <motion.div onMouseEnter={smallEnter} onMouseLeave={defaultEnter}>
        <Title>THANKS TO</Title>
      </motion.div>
      <div className={`hidden lg:flex gap-[24px] mb-[47px]`}>
        {PROFESSOR.slice(0, 4).map((professor) => (
          <Professor professor={professor} />
        ))}
      </div>
      <div className={`hidden lg:flex gap-[24px]`}>
        {PROFESSOR.slice(4).map((professor) => (
          <Professor professor={professor} />
        ))}
      </div>
      {/* 모바일 버전 */}
      <div className={`lg:hidden flex justify-center gap-[11px] mb-[47px]`}>
        {PROFESSOR.slice(0, 3).map((professor) => (
          <Professor professor={professor} />
        ))}
      </div>
      <div className={`lg:hidden flex justify-center gap-[11px] mb-[47px]`}>
        {PROFESSOR.slice(3, 5).map((professor) => (
          <Professor professor={professor} />
        ))}
      </div>
      <div className={`lg:hidden flex justify-center gap-[11px]`}>
        {PROFESSOR.slice(5).map((professor) => (
          <Professor professor={professor} />
        ))}
      </div>
    </div>
  );
};

export default ThanksTo;
