interface Props {
  children: React.ReactNode;
}

const PageInfo = ({ children }: Props) => {
  return (
    <div
      className={`flex justify-center items-center
		w-screen h-[99px] lg:fixed md:fixed z-50 top-16 bg-primary-white 
		sm:w-[90%] sm:h-[63px] sm:mt-[19px]`}
    >
      <p
        className={`text-center text-primary-black font-Organetto_ExtBold text-2xl sm:text-[15px]`}
      >
        {children}
      </p>
    </div>
  );
};

export default PageInfo;
