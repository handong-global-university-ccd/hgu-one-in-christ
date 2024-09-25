interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  focus: boolean;
}

const NavButtonMobile = ({ children, focus }: Props) => {
  return (
    <div className={`flex justify-center items-center pd-[22px]`}>
      <div
        className={`w-[90%] h-[36px] flex justify-center items-center  my-[9px] ${
          focus ? "bg-primary-white text-primary-black" : "text-primary-white"
        }`}
      >
        <p className={`text-center font-Pretendard_Bold text-sm `}>
          {children}
        </p>
      </div>
    </div>
  );
};

export default NavButtonMobile;
