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
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={`w-full sm:flex sm:mb-45`}
    >
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
        <motion.a
          onMouseEnter={middleEnter}
          onMouseLeave={defaultEnter}
          href={`mailto:${designer?.email}?subject=한동대학교 콘텐츠융합디자인학부 졸업전시 문의`}
          className={`font-Pretendard_Regular text-17 mb-22`}
        >
          {designer?.email}
        </motion.a>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          onMouseEnter={middleEnter}
          onMouseLeave={defaultEnter}
          className={`lg:w-569 md:w-[90%] w-full lg:leading-[37px] leading-[22px] font-Pretendard_Light lg:text-21 text-12 tracking-[-1px] whitespace-pre-wrap`}
        >
          {designer?.description}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default DesignerDetail;
