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
        <div
          className={`flex flex-col gap-[20px] font-Pretendard_Bold text-primary-white`}
        >
          <div className={`w-[411px] h-[227px] border`} />
          <div className={`flex gap-[27px] items-baseline`}>
            <p className={`text-[28px]`}>{work?.teamName}</p>
            {/* TODO: team name 하드코딩 */}
            <p className={`text-19px]`}>team name</p>
          </div>
          <div className={`grid grid-cols-2`}>
            {work?.designer.map((item) => (
              <div className={`flex gap-[19px]`}>
                <p className={`text-[19px]`}>{item.nameKo}</p>
                {/* TODO: email 하드코딩 */}
                <p className={`text-[15px] font-Pretendard_Regular`}>
                  email.com
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default WorkDesigner;
