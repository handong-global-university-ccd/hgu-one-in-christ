import { PROFESSOR } from "../../constants/professor";
import { useMousePosition } from "../cursor/Context";
import Professor from "./Professor";
import { motion } from "framer-motion";
import Title from "./Title";

const ThanksTo = () => {
  const { smallEnter, defaultEnter } = useMousePosition();
  return (
    <div
      className={`flex flex-col items-center md:w-[90%] sm:w-[90%] mb-170 lg:mb-344 `}
    >
      <motion.div onMouseEnter={smallEnter} onMouseLeave={defaultEnter}>
        <Title>THANKS TO</Title>
      </motion.div>
      <div className={`hidden lg:flex gap-24 mb-47`}>
        {PROFESSOR.slice(0, 4).map((professor) => (
          <Professor key={professor.id} professor={professor} />
        ))}
      </div>
      <div className={`hidden lg:flex gap-24`}>
        {PROFESSOR.slice(4).map((professor) => (
          <Professor key={professor.id} professor={professor} />
        ))}
      </div>
      {/* 모바일 버전 */}
      <div className={`lg:hidden flex justify-center gap-11 mb-47`}>
        {PROFESSOR.slice(0, 3).map((professor) => (
          <Professor key={professor.id} professor={professor} />
        ))}
      </div>
      <div className={`lg:hidden flex justify-center gap-11 mb-47`}>
        {PROFESSOR.slice(3, 5).map((professor) => (
          <Professor key={professor.id} professor={professor} />
        ))}
      </div>
      <div className={`lg:hidden flex justify-center gap-11`}>
        {PROFESSOR.slice(5).map((professor) => (
          <Professor key={professor.id} professor={professor} />
        ))}
      </div>
    </div>
  );
};

export default ThanksTo;
