import { Work } from "../../models/work.model";

interface Props {
  work: Work | null;
}

const WorkDesigner = ({ work }: Props) => {
  return (
    <>
      {work?.designer.length === 1 ? (
        <div className={`flex gap-6 items-end`}>
          <div className={`w-[192px] h-[272px] border border-white`}></div>
          <div className={`flex flex-col gap-1 text-primary-white items-start`}>
            <div className={`flex gap-[7px] font-Pretendard_Bold items-end`}>
              <p className={`text-[28px]`}>{work.designer[0].nameKo}</p>
              <p className={`text-[19px]`}>영어이름</p>
            </div>
            <p className={`font-Pretendard_Regular text-[17px]`}>example.com</p>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default WorkDesigner;
