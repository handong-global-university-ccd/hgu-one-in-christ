import React from "react";
import { WORKS } from "../../constants/works";
import { WorkCategory } from "../../models/category.model";
import { Work } from "../../models/work.model";
import { Link } from "react-router-dom";
import { PATHS } from "../../constants/paths";
import gridtest1 from "../../assets/works/project/test/gridtest1.png";

interface Props {
  category: WorkCategory;
}

const WorkList = ({ category }: Props) => {
  const works: Work[] = WORKS[category] || [];

  return (
    <div className="grid grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-[22px] sm:gap-[14px] mt-[20px] lg:mt-[267px] lg:mb-[206px] sm:w-[90%]">
      {works.map((work, index) => (
        <Link key={index} to={`${PATHS.WORKS}/${category}/${work.id}`}>
          <div
            className={`group
						`}
            key={work.id}
          >
            <div className="flex flex-col items-center">
              <img
                src={gridtest1}
                className={`w-[288px] h-auto
								sm:w-full my-[10px]
								group-hover:border ${
                  category === "COMMUNICATION"
                    ? "border-primary-orange"
                    : category === "SERVICE"
                      ? "border-primary-red"
                      : category === "UXUI"
                        ? "border-primary-purple"
                        : "border-primary-blue"
                }`}
                alt={`${work.title}`}
              />
              <div className={`flex justify-center items-center`}>
                <div
                  className={`hidden lg:w-[201px] lg:h-[24px] lg:group-hover:flex justify-center items-center 
											${
                        category === "COMMUNICATION"
                          ? "bg-primary-orange"
                          : category === "SERVICE"
                            ? "bg-primary-red"
                            : category === "UXUI"
                              ? "bg-primary-purple"
                              : "bg-primary-blue"
                      }`}
                >
                  <p
                    className={`text-primary-white text-center font-Pretendard_Bold text-[12px]`}
                  >
                    예시문구
                  </p>
                </div>
              </div>

              <div
                className={`w-[288px] mb-[29px] sm:w-full sm:mb-[20px] font-TT_Firs_Light text-[15px]`}
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
    </div>
  );
};

export default WorkList;
