interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  focus: boolean;
}

const NavButtonMobile = ({ children, focus }: Props) => {
  return (
    <div className={`flex justify-center items-center pd-22`}>
      <div
        className={`w-[90%] h-36 flex justify-center items-center my-9 ${
          focus ? "bg-primary-white text-primary-black" : "text-primary-white"
        }`}
      >
        <p className={`text-center font-Pretendard_Bold text-14 `}>
          {children}
        </p>
      </div>
    </div>
  );
};

export default NavButtonMobile;
