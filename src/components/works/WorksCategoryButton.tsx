interface Props {
  children: React.ReactNode;
  imgSrc: string;
  imgSize: string;
  color: string;
}

const WorksCategoryButton = ({ children, color, imgSrc, imgSize }: Props) => {
  return (
    <button
      className={
        "w-[310px] h-[48px] relative flex items-center justify-center border-t overflow-hidden duration-300 transition-all group"
      }
    >
      <div
        className={`absolute w-[310px] h-[48px] flex justify-center items-center font-Pretendard_Bold text-[15px] duration-300 transition-all transform -translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 bg-primary-white ${color}`}
      >
        <p>{children}</p>
      </div>
      <div
        className={`absolute w-[310px] h-[48px] flex justify-center items-center duration-300 transition-all transform translate-y-0 opacity-100 group-hover:translate-y-full group-hover:opacity-0`}
      >
        <img src={imgSrc} alt="category_icon" className={`${imgSize}`} />
      </div>
    </button>
  );
};

export default WorksCategoryButton;
