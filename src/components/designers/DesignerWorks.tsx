import { Link } from "react-router-dom";
import { DesingerDetailInfo } from "../../models/designer.model";
import { PATHS } from "../../constants/paths";
import gridtest1 from "../../assets/works/project/test/gridtest1.png"; //test

interface Props {
  designer: DesingerDetailInfo | null;
}

const DesignerWorks = ({ designer }: Props) => {
  return (
    <div className={`flex justify-center`}>
      <div
        className={`w-full flex flex-col gap-[29px] sm:gap-0 lg:pl-[65px] md:pl-[40px] sm:pl-0
			lg:border-l md:border-l sm:border-t sm:pt-[45px]`}
      >
        {designer?.works.map((work, index) => (
          <div className={`mb-[33px]`}>
            <p
              className={`lg:hidden text-[12px] font-Menda_Medium
								leading-tight ${
                  work.category === "Communication"
                    ? "text-primary-orange"
                    : work.category === "Service"
                      ? "text-primary-red"
                      : work.category === "UX"
                        ? "text-primary-purple"
                        : "text-primary-blue"
                } leading-[30px] mb-[5px]`}
            >
              {work.category.toUpperCase()} DESIGN
            </p>
            <Link
              to={`${PATHS.WORKS}/${work.category}/${
                work.work[work.worksId - 1].id
              }`}
            >
              <div key={index} className={`lg:w-[468px] md:w-full group`}>
                <div className={`relative`}>
                  <img
                    src={gridtest1}
                    className={`w-full lg:hover:border-[3px] ${
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
                    className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden lg:w-[293px] h-[37px] lg:group-hover:flex justify-center items-center 
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesignerWorks;
