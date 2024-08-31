import React from "react";
import { WORKS } from "../../constants/works";
import { WorkCategory } from "../../models/category.model";
import { Work } from "../../models/work.model";

interface Props {
  category: WorkCategory;
}

const WorkList = ({ category }: Props) => {
  const works: Work[] = WORKS[category] || [];

  return (
    <div className="w-full grid grid-cols-4 gap-0 mt-[42px]">
      {works.map((work) => (
        <div
          className={`m-[0.5px] outline outline-1 outline-solid outline-primary-white group
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
                className={`w-[201px] h-[24px] hidden group-hover:block ${
                  category === "COMMUNICATION"
                    ? "bg-primary-orange"
                    : category === "SERVICE"
                    ? "bg-primary-red"
                    : category === "UXUI"
                    ? "bg-primary-purple"
                    : "bg-primary-blue"
                }`}
              >
                <p className={`text-primary-white text-center`}>예시문구</p>
              </div>
            </div>
            <div className={`w-[288px] mb-[29px]`}>
              <p className="text-primary-white ">{work.title}</p>
              <div className="flex">
                {work.designer.map((item, index, designer) => (
                  <React.Fragment key={index}>
                    <p className="text-primary-white">{item.name}</p>
                    {index !== designer.length - 1 && (
                      <p className="text-primary-white whitespace-pre">, </p>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkList;
