import React from "react";
import { WORKS } from "../../constants/works";
import { WorkCategory } from "../../models/category.model";
import { Work } from "../../models/work.model";
import { Link } from "react-router-dom";
import { DOMAIN, PATHS } from "../../constants/paths";
import { useMousePosition } from "../cursor/Context";
import { motion } from "framer-motion";

interface Props {
  category: WorkCategory;
}

const WorkList = ({ category }: Props) => {
  const { middleEnter, defaultEnter } = useMousePosition();

  const works: Work[] = WORKS[category] || [];

  return (
    <motion.div
      onMouseEnter={middleEnter}
      onMouseLeave={defaultEnter}
      className="grid grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-[22px] sm:gap-[14px] mt-[20px] lg:mt-[267px] lg:mb-[206px] sm:w-[90%]"
    >
      {works.map((work, index) => (
        <Link key={index} to={`${PATHS.WORKS}/${category}/${work.id}`}>
          <div
            className={`group cursor-none
						`}
            key={work.id}
          >
            <div className="flex flex-col">
              <div className={`relative`}>
                <img
                  src={`${DOMAIN}${work.thumbnail}`}
                  className={`w-[288px] h-[216px] sm:h-auto
									sm:w-full my-[10px]
									lg:group-hover:border-[2px] ${
                    category === "COMMUNICATION"
                      ? "border-primary-orange"
                      : category === "SERVICE"
                        ? "border-primary-red"
                        : category === "UX"
                          ? "border-primary-purple"
                          : "border-primary-blue"
                  }`}
                  alt={`${work.title}`}
                />
                <div
                  className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center`}
                >
                  <div
                    className={`hidden lg:w-[220px] lg:h-[24px] lg:group-hover:flex justify-center items-center 
												${
                          category === "COMMUNICATION"
                            ? "bg-primary-orange"
                            : category === "SERVICE"
                              ? "bg-primary-red"
                              : category === "UX"
                                ? "bg-primary-purple"
                                : "bg-primary-blue"
                        }`}
                  >
                    <p
                      className={` text-primary-white text-center font-Pretendard_Bold text-[12px]`}
                    >
                      {work.summary}
                    </p>
                  </div>
                </div>
              </div>

              <div
                className={`w-[288px] mb-[29px] sm:w-full sm:mb-[20px] font-TT_Firs_Light text-[15px] sm:text-[11px]`}
              >
                <p className="text-primary-white">{work.title}</p>
                <div className="flex">
                  {work.designer.map((item, index, designer) => (
                    <React.Fragment key={index}>
                      <p className="text-primary-white">{item.nameKo}</p>
                      {index !== designer.length - 1 && (
                        <p className="text-primary-white whitespace-pre">, </p>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </motion.div>
  );
};

export default WorkList;
