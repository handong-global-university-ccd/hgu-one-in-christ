import { Link } from "react-router-dom";
import { DesingerDetailInfo } from "../../models/designer.model";
import { PATHS } from "../../constants/paths";

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
        <Link to={`${PATHS.WORKS}/${work.work[work.worksId - 1].pagination}`}>
          <div
            key={index}
            className={`w-[468px] h-[351px] 
							flex justify-center items-center
							hover:border-[3px] bg-slate-500/50 ${
                work.category === "COMMUNICATION"
                  ? "border-primary-orange"
                  : work.category === "SERVICE"
                  ? "border-primary-red"
                  : work.category === "UXUI"
                  ? "border-primary-purple"
                  : "border-primary-blue"
              } group`}
          >
            <div
              className={`hidden w-[293px] h-[37px] group-hover:flex justify-center items-center 
											${
                        work.category === "COMMUNICATION"
                          ? "bg-primary-orange"
                          : work.category === "SERVICE"
                          ? "bg-primary-red"
                          : work.category === "UXUI"
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
        </Link>
      ))}
    </div>
  );
};

export default DesignerWorks;
