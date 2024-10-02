interface Props {
  children: React.ReactNode;
  korContent: string;
}

const StartContent = ({ children, korContent }: Props) => {
  return (
    <div
      className={`flex justify-between group w-[272px] text-[26px] text-primary-white font-Menda_Medium`}
    >
      <p>(</p>
      <p className={`group-hover:hidden`}>{children}</p>
      <p
        className={`hidden group-hover:block font-Pretendard_Regular text-[23px]`}
      >
        {korContent}
      </p>
      <p>)</p>
    </div>
  );
};

export default StartContent;
