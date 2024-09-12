interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  focus: boolean;
}

const Button = ({ children, focus }: Props) => {
  return (
    <button
      className={`rounded font-Pretendard_Bold text-sm px-2.5 
				${focus && "pointer-events-none"}
				hover:bg-primary-white hover:text-primary-black 
				${focus ? "text-primary-white" : "text-primary-white/40"}  
				`}
    >
      {children}
    </button>
  );
};

export default Button;
