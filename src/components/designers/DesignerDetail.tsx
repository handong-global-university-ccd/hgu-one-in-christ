import { DesingerDetailInfo } from "../../models/designer.model";
import { DOMAIN } from "../../constants/paths";
import { useMousePosition } from "../cursor/Context";
import { motion } from "framer-motion";

interface Props {
  designer: DesingerDetailInfo | null;
}

const DesignerDetail = ({ designer }: Props) => {
  const { personEnter, middleEnter, defaultEnter } = useMousePosition();

  return (
    <div className={`w-full sm:flex sm:mb-45`}>
      <div className={`flex flex-col items-start text-primary-white`}>
        <motion.img
          onMouseEnter={personEnter}
          onMouseLeave={defaultEnter}
          src={`${DOMAIN}${designer?.img}`}
          className={`w-[262.59px] sm:w-153 md:w-[40%] mb-50 sm:mb-45`}
        />
        <motion.div
          onMouseEnter={middleEnter}
          onMouseLeave={defaultEnter}
          className={`flex items-baseline gap-2.5 font-Pretendard_Bold mb-8 sm:mb-0`}
        >
          <p className={`text-28`}>{designer?.nameKo}</p>
          <p className={`text-19`}>{designer?.nameEng}</p>
        </motion.div>
        <motion.p
          onMouseEnter={middleEnter}
          onMouseLeave={defaultEnter}
          className={`font-Pretendard_Regular text-17 mb-22`}
        >
          {designer?.email}
        </motion.p>
        <motion.p
          onMouseEnter={middleEnter}
          onMouseLeave={defaultEnter}
          className={`lg:w-569 md:w-[90%] w-full lg:leading-37 leading-22 font-Pretendard_Light lg:text-21 text-12 tracking-[-1px] whitespace-pre-wrap`}
        >
          {designer?.description}
        </motion.p>
      </div>
    </div>
  );
};

export default DesignerDetail;
