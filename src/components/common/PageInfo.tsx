interface Props {
  children: React.ReactNode;
}

const PageInfo = ({ children }: Props) => {
  return (
    <p className="w-screen h-[99px] text-center text-primary-black bg-primary-white font-Organetto_ExtBold text-2xl py-9 sticky top-16">
      {children}
    </p>
  );
};

export default PageInfo;
