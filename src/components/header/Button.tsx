interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  focus: boolean;
}

const Button = ({ children, focus }: Props) => {
  return (
    <button
      className={`border-solid border font-Pretendard_Bold active:border-white rounded text-white text-sm px-2.5 ${
        focus ? "border-white" : "border-none"
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
