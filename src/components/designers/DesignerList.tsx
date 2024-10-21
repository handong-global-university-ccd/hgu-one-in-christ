import { Link } from "react-router-dom";
import { DOMAIN, PATHS } from "../../constants/paths";
import { DesingerDetailInfo } from "../../models/designer.model";
import { useMousePosition } from "../cursor/Context";
import { motion } from "framer-motion";

interface Props {
  designer: DesingerDetailInfo;
}

const DesignerList = ({ designer }: Props) => {
  const { bigEnter, smallEnter, defaultEnter } = useMousePosition();
  const thumbnail = designer.works[0];

  return (
    <Link
      to={`${PATHS.DESIGNERS}/${designer.id}`}
      className={`flex flex-col items-center cursor-none`}
    >
      <motion.div
        onMouseEnter={smallEnter}
        onMouseLeave={defaultEnter}
        className="w-[90%] lg:w-full h-69 sm:h-50 
									flex items-center
								text-primary-white lg:hover:text-primary-black md:hover:text-primary-black text-18 sm:text-14 
									lg:px-24 gap-151 sm:gap-50
								lg:hover:bg-primary-white md:hover:bg-primary-white 
									group
									"
      >
        <p className="font-Pretendard_Regular w-90 sm:w-70 pl-10">
          {designer.nameKo}
        </p>
        <div className={`sm:hidden flex gap-20 sm:gap-10`}>
          {designer.works[0].category === "UX" ? (
            <p className="font-TT_Firs_Light">UX Design</p>
          ) : (
            designer.works.map((work) => (
              <p
                key={`${work.category}${work.worksId}`}
                className="font-TT_Firs_Light"
              >
                {work.category} Design
              </p>
            ))
          )}
        </div>

        <p className={`hidden sm:block font-TT_Firs_Light`}>
          {designer.nameEng}
        </p>

        <motion.img
          onMouseEnter={bigEnter}
          onMouseLeave={defaultEnter}
          src={`${DOMAIN}${thumbnail.work[thumbnail.worksId - 1].thumbnail}`}
          className="hidden w-416 lg:group-hover:block fixed top-327 right-[20%]"
        />
      </motion.div>
      <div className={`w-full md:w-[90%] sm:w-screen border-b`}></div>
    </Link>
  );
};

export default DesignerList;
