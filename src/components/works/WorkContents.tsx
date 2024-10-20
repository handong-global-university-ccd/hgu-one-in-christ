import { WorkCategory } from "../../models/category.model";
import { Work } from "../../models/work.model";
import { useMousePosition } from "../cursor/Context";
import { motion } from "framer-motion";

interface Props {
  category: WorkCategory;
  work: Work | null;
}

const WorkContents = ({ category, work }: Props) => {
  const { bigEnter, defaultEnter } = useMousePosition();

  return (
    <motion.div
      onMouseEnter={bigEnter}
      onMouseLeave={defaultEnter}
      className={`w-687 md:w-[50%] sm:w-full flex flex-col text-primary-white lg:justify-between md:gap-40 sm:gap-6`}
    >
      <div className={`flex justify-between`}>
        <p
          className={`font-Menda_Medium sm:text-12 md:text-19 text-22 ${
            category === "COMMUNICATION"
              ? "text-primary-orange"
              : category === "SERVICE"
                ? "text-primary-red"
                : category === "UX"
                  ? "text-primary-purple"
                  : "text-primary-blue"
          }`}
        >{`${category} DESIGN`}</p>
        <div
          className={`flex gap-12 sm:gap-5 text-17 sm:text-12 md:text-19 sm:mb-32 ${
            category === "COMMUNICATION"
              ? "text-primary-orange"
              : category === "SERVICE"
                ? "text-primary-red"
                : category === "UX"
                  ? "text-primary-purple"
                  : "text-primary-blue"
          }`}
        >
          <p className={`font-Pretendard_SemiBold`}>지도교수</p>
          <p className={`font-Pretendard_Light`}>{work?.professor}</p>
        </div>
      </div>

      <div>
        <p
          className={`font-Pretendard_Bold sm:text-22 md:text-27 text-33 mb-14`}
        >
          {work?.title}
        </p>
        <p
          className={`font-Pretendard_Light sm:text-12 md:text-14 text-17 leading-[34px] sm:leading-[22px] tracking-[-1px]`}
        >
          {work?.description}
        </p>
      </div>
    </motion.div>
  );
};

export default WorkContents;
