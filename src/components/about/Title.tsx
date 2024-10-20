interface Props {
  children: React.ReactNode;
}

const Title = ({ children }: Props) => {
  return (
    <div
      className={`w-full font-Organetto_ExtBold text-25 sm:text-15 text-primary-white leading-120 text-center mb-50`}
    >
      {children}
    </div>
  );
};

export default Title;
