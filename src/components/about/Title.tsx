interface Props {
  children: React.ReactNode;
}

const Title = ({ children }: Props) => {
  return (
    <div
      className={`w-full font-Organetto_ExtBold text-[25px] text-primary-white leading-[120px] text-center`}
    >
      {children}
    </div>
  );
};

export default Title;
