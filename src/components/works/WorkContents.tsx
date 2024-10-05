import { WorkCategory } from "../../models/category.model";
import { Work } from "../../models/work.model";

interface Props {
  category: WorkCategory;
  work: Work | null;
}

const WorkContents = ({ category, work }: Props) => {
  return (
    <div
      className={`w-[687px] md:w-[50%] sm:w-full flex flex-col text-primary-white lg:justify-between md:gap-[40px] sm:gap-[6px]`}
    >
      <p
        className={`font-Menda_Medium sm:text-[12px] md:text-[19px] text-[22px] ${
          category === "COMMUNICATION"
            ? "text-primary-orange"
            : category === "SERVICE"
              ? "text-primary-red"
              : category === "UXUI"
                ? "text-primary-purple"
                : "text-primary-blue"
        }`}
      >{`${category} DESIGN`}</p>

      <div>
        <p
          className={`font-Pretendard_Bold sm:text-[22px] md:text-[27px] text-[33px] mb-[14px]`}
        >
          {work?.title}
        </p>
        <p
          className={`font-Pretendard_Regular sm:text-[12px] md:text-[14px] text-[17px]`}
        >
          {work?.description}
        </p>
      </div>
    </div>
  );
};

export default WorkContents;
