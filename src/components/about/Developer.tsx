import { DOMAIN } from "../../constants/paths";
import Title from "./Title";

const Developer = () => {
  return (
    <div className={`flex flex-col items-center mb-[625px]`}>
      <Title>DEVELOPER</Title>
      <div
        className={`flex md:flex-col sm:flex-col gap-[72px] md:gap-[20px] sm:gap-[6px] justify-center items-center mt-[21px]`}
      >
        <img
          src={`${DOMAIN}images/about/pardLogo.webp`}
          alt="pard-logo"
          className={`w-[96px] h-auto`}
        />
        <p
          className={`font-Pretendard_Light text-primary-white text-[22px] md:text-[18px] sm:text-[14px] leading-[30px] tracking-[-1px] `}
        >
          박민지
        </p>
      </div>
    </div>
  );
};

export default Developer;
