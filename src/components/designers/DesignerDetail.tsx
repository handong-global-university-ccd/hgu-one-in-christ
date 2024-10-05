import { DesingerDetailInfo } from "../../models/designer.model";
import { DOMAIN } from "../../constants/paths";

interface Props {
  designer: DesingerDetailInfo | null;
}

const DesignerDetail = ({ designer }: Props) => {
  return (
    <div className={`sm:flex sm:justify-center sm:mb-[45px]`}>
      <div className={`flex flex-col items-start text-primary-white`}>
        <img
          src={`${DOMAIN}${designer?.img}`}
          className={`w-[262.59px] sm:w-[153px] md:w-[40%] mb-[50px] sm:mb-[45px]`}
        />
        <div
          className={`flex items-baseline gap-2.5 font-Pretendard_Bold mb-[8px] sm:mb-0`}
        >
          <p className={`text-[28px]`}>{designer?.nameKo}</p>
          <p className={`text-[19px]`}>{designer?.nameEng}</p>
        </div>
        <p className={`font-Pretendard_Regular text-[17px] mb-[22px]`}>
          {designer?.email}
        </p>
        <p
          className={`lg:w-[569px] md:w-[90%] w-full lg:leading-[37px] leading-[30px] font-Pretendard_Regular lg:text-[21px] text-[16px]`}
        >
          {designer?.description}
        </p>
      </div>
    </div>
  );
};

export default DesignerDetail;
