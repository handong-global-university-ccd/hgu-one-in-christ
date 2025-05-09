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
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      key={professor.id}
      className={`sm:w-[30%] md:w-[30%] flex flex-col gap-7`}
    >
      <motion.img
        onMouseEnter={personEnter}
        onMouseLeave={defaultEnter}
        src={`${DOMAIN}${professor.imgSrc}`}
        className={`lg:w-174`}
        alt="professor"
      />

      <motion.p
        onMouseEnter={smallEnter}
        onMouseLeave={defaultEnter}
        className={`font-Pretendard_Regular text-20 sm:text-14 text-primary-white`}
      >
        {professor.name}
      </motion.p>
    </motion.div>
  );
};

export default Professor;
