import { DOMAIN } from "../../constants/paths";
import { Professor as IProfessor } from "../../models/professor.model";
import { useMousePosition } from "../cursor/Context";
import { motion } from "framer-motion";

interface Props {
  professor: IProfessor;
}

const Professor = ({ professor }: Props) => {
  const { personEnter, smallEnter, defaultEnter } = useMousePosition();

  return (
    <div
      key={professor.id}
      className={`sm:w-[30%] md:w-[30%] flex flex-col gap-[7px]`}
    >
      <motion.img
        onMouseEnter={personEnter}
        onMouseLeave={defaultEnter}
        src={`${DOMAIN}${professor.imgSrc}`}
        className={`lg:w-[174px]`}
        alt="professor"
      />

      <motion.p
        onMouseEnter={smallEnter}
        onMouseLeave={defaultEnter}
        className={`font-Pretendard_Regular text-[20px] sm:text-[14px] text-primary-white`}
      >
        {professor.name}
      </motion.p>
    </div>
  );
};

export default Professor;
