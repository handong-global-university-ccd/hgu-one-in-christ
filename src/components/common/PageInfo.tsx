interface Props {
  children: React.ReactNode;
}

const PageInfo = ({ children }: Props) => {
  return (
    <p className="text-white font-Organetto_ExtBold text-2xl py-9">
      {children}
    </p>
  );
};

export default PageInfo;
