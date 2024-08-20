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
        "w-[310px] h-[48px] flex items-center justify-center border-t " + color
      }
    >
      <img
        className={"block focus:hidden " + imgSize}
        src={imgSrc}
        alt="category_icon"
      />
      <p className="hidden focus:block">{children}</p>
    </button>
  );
};

export default WorksCategoryButton;
