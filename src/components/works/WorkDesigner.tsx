import { Work } from "../../models/work.model";
import { DOMAIN } from "../../constants/paths";
import { DESIGNERS } from "../../constants/designers";
import { useMousePosition } from "../cursor/Context";
import { motion } from "framer-motion";

interface Props {
  work: Work | null;
}

const WorkDesigner = ({ work }: Props) => {
  const { personEnter, middleEnter, defaultEnter } = useMousePosition();

  return (
    <>
      {work?.designer.length === 1 ? (
        <div className={`md:w-[45%]`}>
          <div className={`flex gap-24 items-end`}>
            <motion.img
              onMouseEnter={personEnter}
              onMouseLeave={defaultEnter}
              src={`${DOMAIN}${DESIGNERS[work.designer[0].id - 1].img}`}
              className={`w-192 sm:w-[125.69px] md:w-[50%]`}
            />
            <motion.div
              onMouseEnter={middleEnter}
              onMouseLeave={defaultEnter}
              className={`flex flex-col gap-4 text-primary-white items-start`}
            >
              <div className={`flex gap-7 font-Pretendard_Bold items-baseline`}>
                <p className={`sm:text-18 md:text-26 text-28`}>
                  {work.designer[0].nameKo}
                </p>
                <p className={`sm:text-12 md:text-17 text-19`}>
                  {DESIGNERS[work.designer[0].id - 1].nameEng}
                </p>
              </div>
              <p
                className={`font-Pretendard_Regular sm:text-11 md:text-15 text-17`}
              >
                {DESIGNERS[work.designer[0].id - 1].email}
              </p>
            </motion.div>
          </div>
        </div>
      ) : (
        <div
          className={`flex flex-col gap-20  md:w-[40%] sm:w-full font-Pretendard_Bold text-primary-white`}
        >
          <img src={`${DOMAIN}${work?.teamImg}`} className={`w-411`} />
          <div className={`sm:flex md:flex justify-between`}>
            <div className={`flex gap-27 items-baseline sm:leading-tight`}>
              <p className={`sm:text-18 md:text-26 text-28`}>
                {work?.teamName}
              </p>
            </div>
            <div
              className={`lg:mt-10 grid grid-cols-2 gap-7 sm:flex md:flex sm:flex-col md:flex-col sm:gap-6 md:gap-6`}
            >
              {work?.designer.map((item) => (
                <div
                  className={`flex lg:gap-7 items-center gap-13 sm:w-auto md:w-auto`}
                >
                  <p className={`text-11 lg:text-19`}>{item.nameKo}</p>
                  <p
                    className={`text-11 lg:text-15 font-Pretendard_Regular lg:mr-12`}
                  >
                    {DESIGNERS[item.id - 1].email}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WorkDesigner;
