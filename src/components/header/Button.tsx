interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  focus: boolean;
}

const Button = ({ children, focus }: Props) => {
  return (
    <button
      className={
        "border-solid border font-Pretendard_Bold active:border-white border-black" +
        (focus ? "focus:border-white" : "") +
        " rounded text-white px-2.5"
      }
    >
      {children}
    </button>
  );
};

export default Button;
