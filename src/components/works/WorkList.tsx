import React from "react";
import { WORKS } from "../../constants/works";
import { WorkCategory } from "../../models/category.model";
import { Work } from "../../models/work.model";
import { Link } from "react-router-dom";
import { PATHS } from "../../constants/paths";

interface Props {
  category: WorkCategory;
}

const WorkList = ({ category }: Props) => {
  const works: Work[] = WORKS[category] || [];

  return (
    <div className="grid grid-cols-4 gap-[22px] mt-[267px] lg:mb-[206px]">
      {works.map((work) => (
        <Link to={`${PATHS.WORKS}/${category}/${work.id}`}>
          <div
            className={`group
						`}
            key={work.id}
          >
            <div className="flex flex-col items-center">
              <div
                className={`w-[288px] h-[216px] 
								flex justify-center items-center
								my-[10px] bg-gray-600
								group-hover:border ${
                  category === "COMMUNICATION"
                    ? "border-primary-orange"
                    : category === "SERVICE"
                      ? "border-primary-red"
                      : category === "UXUI"
                        ? "border-primary-purple"
                        : "border-primary-blue"
                }`}
              >
                <div
                  className={`hidden w-[201px] h-[24px] group-hover:flex justify-center items-center 
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
                className={`w-[288px] mb-[29px] font-TT_Firs_Light text-[15px]`}
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
