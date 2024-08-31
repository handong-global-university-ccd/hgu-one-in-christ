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
          className={`m-[0.5px] outline outline-1 outline-solid outline-primary-white
					`}
          key={work.id}
        >
          <div className="flex flex-col items-center">
            <div className={`w-[288px] h-[216px] my-[10px] bg-gray-600`}></div>
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
