import { WorkCategory } from "../../models/category.model";
import { Work } from "../../models/work.model";

interface Props {
  category: WorkCategory;
  work: Work | null;
}

const WorkContents = ({ category, work }: Props) => {
  return (
    <div className={`flex flex-col text-primary-white justify-between`}>
      <p
        className={`font-Menda_Medium text-[22px] ${
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
        <p className={`font-Pretendard_Bold text-[33px] mb-[14px]`}>
          {work?.title}
        </p>
        <p className={`w-[687px] font-Pretendard_Regular text-[17px]`}>
          작품을 소개하는 글을 적어주세요. 작품을 소개하는 글을 적어주세요.
          작품을 소개하는 글을 적어주세요. 작품을 소개하는 글을 적어주세요.
          작품을 소개하는 글을 적어주세요. 작품을 소개하는 글을 적어주세요.
          작품을 소개하는 글을 적어주세요. 작품을 소개하는 글을 적어주세요.
          작품을 소개하는 글을 적어주세요. 작품을 소개하는 글을 적어주세요.
          작품을 소개하는 글을 적어주세요. 작품을 소개하는 글을 적어주세요.
          작품을 소개하는 글을 적어주세요. 작품을 소개하는 글을 적어주세요.
          작품을 소개하는 글을 적어주세요. (공백포함 284글자)
        </p>
      </div>
    </div>
  );
};

export default WorkContents;
