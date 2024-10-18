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
          <div className={`flex gap-6 items-end`}>
            <motion.img
              onMouseEnter={personEnter}
              onMouseLeave={defaultEnter}
              src={`${DOMAIN}${DESIGNERS[work.designer[0].id - 1].img}`}
              className={`w-[192px] sm:w-[125.69px] md:w-[50%]`}
            />
            <motion.div
              onMouseEnter={middleEnter}
              onMouseLeave={defaultEnter}
              className={`flex flex-col gap-1 text-primary-white items-start`}
            >
              <div
                className={`flex gap-[7px] font-Pretendard_Bold items-baseline`}
              >
                <p className={`sm:text-[18px] md:text-[26px] text-[28px]`}>
                  {work.designer[0].nameKo}
                </p>
                <p className={`sm:text-[12px] md:text-[17px] text-[19px]`}>
                  {DESIGNERS[work.designer[0].id - 1].nameEng}
                </p>
              </div>
              <p
                className={`font-Pretendard_Regular sm:text-[11px] md:text-[15px] text-[17px]`}
              >
                {DESIGNERS[work.designer[0].id - 1].email}
              </p>
            </motion.div>
          </div>
        </div>
      ) : (
        <div
          className={`flex flex-col gap-[20px]  md:w-[40%] sm:w-full font-Pretendard_Bold text-primary-white`}
        >
          <img src={`${DOMAIN}${work?.teamImg}`} className={`w-[411px]`} />
          <div className={`sm:flex md:flex justify-between`}>
            <div className={`flex gap-[27px] items-baseline sm:leading-tight`}>
              <p className={`sm:text-[18px] md:text-[26px] text-[28px]`}>
                {work?.teamName}
              </p>
            </div>
            <div
              className={`grid grid-cols-2 gap-[7px] sm:flex md:flex sm:flex-col md:flex-col sm:gap-[6px] md:gap-[6px]`}
            >
              {work?.designer.map((item) => (
                <div
                  className={`flex lg:gap-[19px] items-center gap-[13px] sm:w-auto md:w-auto`}
                >
                  <p className={`text-[11px] lg:text-[19px]`}>{item.nameKo}</p>
                  <p
                    className={`text-[11px] lg:text-[15px] font-Pretendard_Regular lg:mr-[12px]`}
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
