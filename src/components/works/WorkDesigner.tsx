import { Work } from "../../models/work.model";
import designer_alone from "../../assets/works/project/test/designer_alone.png"; // test
import designer_group from "../../assets/works/project/test/designer_group.png"; // test

interface Props {
  work: Work | null;
}

const WorkDesigner = ({ work }: Props) => {
  return (
    <>
      {work?.designer.length === 1 ? (
        <div className={`md:w-[45%]`}>
          <div className={`flex gap-6 items-end`}>
            {/* TODO: test 이미지  */}
            <img
              src={designer_alone}
              className={`w-[192px] sm:w-[125.69px] md:w-[50%]`}
            />
            <div
              className={`flex flex-col gap-1 text-primary-white items-start`}
            >
              <div className={`flex gap-[7px] font-Pretendard_Bold items-end`}>
                <p className={`sm:text-[18px] md:text-[26px] text-[28px]`}>
                  {work.designer[0].nameKo}
                </p>
                <p className={`sm:text-[12px] md:text-[17px] text-[19px]`}>
                  영어이름
                </p>
              </div>
              <p
                className={`font-Pretendard_Regular sm:text-[11px] md:text-[15px] text-[17px]`}
              >
                example.com
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`flex flex-col gap-[20px] w-[411px] md:w-[40%] sm:w-full font-Pretendard_Bold text-primary-white`}
        >
          {/* TODO: test 이미지  */}
          <img src={designer_group} className={`w-full`} />
          <div className={`sm:flex justify-between`}>
            <div className={`flex gap-[27px] items-baseline sm:leading-tight`}>
              <p className={`sm:text-[18px] md:text-[26px] text-[28px]`}>
                {work?.teamName}
              </p>
              {/* TODO: team name 하드코딩 */}
              <p className={`sm:text-[12px] md:text-[17px] text-[19px]`}>
                team name
              </p>
            </div>
            <div
              className={`grid grid-cols-2 gap-[7px] sm:flex sm:flex-col sm:gap-[6px]`}
            >
              {work?.designer.map((item) => (
                <div
                  className={`flex gap-[19px] items-center w-[250px] sm:gap-[13px] sm:w-auto`}
                >
                  <p className={`sm:text-[11px] md:text-[15px] text-[19px]`}>
                    {item.nameKo}
                  </p>
                  {/* TODO: email 하드코딩 */}
                  <p
                    className={`sm:text-[11px] md:text-[15px] text-[15px] font-Pretendard_Regular`}
                  >
                    email.com
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WorkDesigner;
