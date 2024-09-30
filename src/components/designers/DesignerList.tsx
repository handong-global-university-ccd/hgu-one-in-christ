import { Link } from "react-router-dom";
import { PATHS } from "../../constants/paths";
import { DesingerDetailInfo } from "../../models/designer.model";
import designer_work from "../../assets/works/project/test/designer_work.png";

interface Props {
  designer: DesingerDetailInfo;
}

const DesignerList = ({ designer }: Props) => {
  return (
    <Link
      to={`${PATHS.DESIGNERS}/${designer.id}`}
      className={`flex flex-col items-center cursor-pointer`}
    >
      <div
        className="w-[90%] lg:w-full h-[69px] sm:h-[50px] 
									flex items-center
								text-primary-white hover:text-primary-black text-[18px] sm:text-[14px] 
									lg:px-6 gap-[184px] sm:gap-[34px]
								hover:bg-primary-white 
									group
									"
      >
        <p className="font-Pretendard_Regular">{designer.nameKo}</p>
        <div className={`flex gap-[20px] sm:gap-[10px]`}>
          {designer.works.map((work) => (
            <p className="font-TT_Firs_Light">{work.category} Design</p>
          ))}
        </div>

        <img
          src={designer_work}
          className="hidden w-[416px] lg:group-hover:block group-hover:fixed absolute top-[327px] right-[300px]"
        />
      </div>
      <div className={`w-full md:w-[90%] sm:w-screen border-b`}></div>
    </Link>
  );
};

export default DesignerList;
