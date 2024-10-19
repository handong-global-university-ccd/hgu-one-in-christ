import { Header } from "../../models/executives.model";

interface Props {
  header: Header;
}

const ExecutiveHeader = ({ header }: Props) => {
  return (
    <>
      <div
        className={`hidden lg:flex flex-col gap-[12px] w-[185px] text-[22px] text-primary-white leading-[30px] tracking-[-1px]`}
      >
        {header.position?.map((item) => (
          <div className={`flex justify-between`}>
            <p className={`font-Pretendard_Regular w-[100px]`}>{item.role}</p>
            <p className={`font-Pretendard_Light`}>{item.name}</p>
          </div>
        ))}
      </div>
      {/* 모바일 */}
      <div
        className={`lg:hidden flex flex-col w-full text-[14px] md:text-[18px] text-primary-white leading-[30px] tracking-[-1px]`}
      >
        {header.position?.map((item) => (
          <div className={`flex gap-[17px]`}>
            <p
              className={`text-right sm:w-[100px] md:w-[200px] font-Pretendard_Regular`}
            >
              {item.role}
            </p>
            <p className={`sm:w-[100px] md:w-[200px]  font-Pretendard_Light`}>
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ExecutiveHeader;
