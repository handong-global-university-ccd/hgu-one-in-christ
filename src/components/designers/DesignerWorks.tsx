import { Link } from "react-router-dom";
import { DesingerDetailInfo } from "../../models/designer.model";
import { DOMAIN, PATHS } from "../../constants/paths";
import { useMousePosition } from "../cursor/Context";
import { motion } from "framer-motion";

interface Props {
  designer: DesingerDetailInfo | null;
}

const DesignerWorks = ({ designer }: Props) => {
  const { bigEnter, defaultEnter } = useMousePosition();

  return (
    <motion.div
      onMouseEnter={bigEnter}
      onMouseLeave={defaultEnter}
      className={`flex justify-center`}
    >
      <div
        className={`w-full flex flex-col gap-29 sm:gap-0 lg:pl-65 md:pl-40 sm:pl-0
      lg:border-l md:border-l sm:border-t sm:pt-45`}
      >
        {designer?.works.map((work, index) => (
          <div className={`mb-33`} key={index}>
            <p
              className={`lg:hidden text-12 font-Menda_Medium
                leading-tight ${
                  work.category === "Communication"
                    ? "text-primary-orange"
                    : work.category === "Service"
                      ? "text-primary-red"
                      : work.category === "UX"
                        ? "text-primary-purple"
                        : "text-primary-blue"
                } leading-[30px] mb-5`}
            >
              {work.category.toUpperCase()} DESIGN
            </p>
            <Link
              to={`${PATHS.WORKS}/${work.category.toUpperCase()}/${
                work.work[work.worksId - 1].id
              }`}
              className={`cursor-none`}
            >
              <div className={`lg:w-468 md:w-full group relative`}>
                <div
                  className={`w-full h-full absolute top-0 left-0 transition-all duration-100 ${
                    work.category === "Communication"
                      ? "border-primary-orange"
                      : work.category === "Service"
                        ? "border-primary-red"
                        : work.category === "UX"
                          ? "border-primary-purple"
                          : "border-primary-blue"
                  } lg:hover:border-[3px]`}
                />
                <img
                  src={`${DOMAIN}${work.work[work.worksId - 1].thumbnail}`}
                  className={`w-full`}
                  alt={`${index}`}
                />
                <div
                  className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden lg:w-293 h-37 lg:group-hover:flex justify-center items-center 
                    ${
                      work.category === "Communication"
                        ? "bg-primary-orange"
                        : work.category === "Service"
                          ? "bg-primary-red"
                          : work.category === "UX"
                            ? "bg-primary-purple"
                            : "bg-primary-blue"
                    }`}
                >
                  <p
                    className={`text-primary-white text-center font-Pretendard_Bold text-15`}
                  >
                    {work.work[work.worksId - 1].summary}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default DesignerWorks;
