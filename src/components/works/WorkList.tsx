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
  const { workListEnter, defaultEnter } = useMousePosition();
  const works: Work[] = WORKS[category] || [];

  return (
    <motion.div
      onMouseEnter={workListEnter}
      onMouseLeave={defaultEnter}
      className="grid grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-22 sm:gap-14 mt-20 lg:mt-267 lg:mb-206 sm:w-[90%] md:w-[90%]"
    >
      {works.map((work, index) => (
        <Link key={index} to={`${PATHS.WORKS}/${category}/${work.id}`}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className={`group lg:cursor-none`}
            key={work.id}
          >
            <div className="flex flex-col">
              <div className={`relative`}>
                <div
                  className={`relative lg:w-288 lg:h-216 h-auto w-full my-10 transition-all duration-100`}
                >
                  <img
                    src={`${DOMAIN}${work.thumbnail}`}
                    className={`w-full h-full object-cover transform scale-100 group-hover:scale-100`}
                    alt={`${work.title}`}
                  />
                  <div
                    className={`absolute inset-0 border-0 lg:group-hover:border-2 transition-all duration-100 ${
                      category === "COMMUNICATION"
                        ? "border-primary-orange"
                        : category === "SERVICE"
                          ? "border-primary-red"
                          : category === "UX"
                            ? "border-primary-purple"
                            : "border-primary-blue"
                    }`}
                  ></div>
                </div>
                <div
                  className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center`}
                >
                  <div
                    className={`hidden lg:w-220 lg:h-24 lg:group-hover:flex justify-center items-center transition-all duration-100  
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
                      className={`text-primary-white text-center font-Pretendard_Bold text-12`}
                    >
                      {work.summary}
                    </p>
                  </div>
                </div>
              </div>

              <div
                className={`w-288 mb-29 sm:w-full sm:mb-20 font-TT_Firs_Light text-primary-white text-15 sm:text-11`}
              >
                <p>{work.title}</p>
                <div
                  className={`flex ${work.designer.length > 4 && "sm:text-10"}`}
                >
                  {work.designer.map((item, index, designer) => (
                    <React.Fragment key={index}>
                      <p className={``}>{item.nameKo}</p>
                      {index !== designer.length - 1 && (
                        <p className="whitespace-pre">, </p>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </Link>
      ))}
    </motion.div>
  );
};

export default WorkList;
