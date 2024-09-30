import { Link } from "react-router-dom";
import { DesingerDetailInfo } from "../../models/designer.model";
import { PATHS } from "../../constants/paths";
import gridtest1 from "../../assets/works/project/test/gridtest1.png"; //test

interface Props {
  designer: DesingerDetailInfo | null;
}

const DesignerWorks = ({ designer }: Props) => {
  return (
    <div
      className={`flex flex-col gap-[29px] pl-[65px]
		border-l`}
    >
      {designer?.works.map((work, index) => (
        <Link
          to={`${PATHS.WORKS}/${work.category}/${
            work.work[work.worksId - 1].id
          }`}
        >
          <div key={index} className={`w-[468px] h-[351px] group`}>
            <div className={`relative`}>
              <img
                src={gridtest1}
                className={`w-full hover:border-[3px] ${
                  work.category === "Communication"
                    ? "border-primary-orange"
                    : work.category === "Service"
                      ? "border-primary-red"
                      : work.category === "UX"
                        ? "border-primary-purple"
                        : "border-primary-blue"
                }`}
                alt={`${index}`}
              />
              <div
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden w-[293px] h-[37px] group-hover:flex justify-center items-center 
												${
                          work.category === "Communication"
                            ? "bg-primary-orange"
                            : work.category === "Service"
                              ? "bg-primary-red"
                              : work.category === "UX"
                                ? "bg-primary-purple"
                                : "bg-primary-blue"
                        }`}
              >
                <p
                  className={`text-primary-white text-center font-Pretendard_Bold text-[15px]`}
                >
                  예시문구
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default DesignerWorks;
