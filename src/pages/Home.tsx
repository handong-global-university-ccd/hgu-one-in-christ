import { useEffect, useRef, useState } from "react";
import HomeLast from "../components/home/HomeLast";
import HomeStart from "../components/home/HomeStart";
import ShowDate from "../components/home/ShowDate";

const Home: React.FC = () => {
  const outerDivRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      if (isScrolling) return;

      setIsScrolling(true);
      e.preventDefault();
      const { deltaY } = e;
      const scrollTop = outerDivRef.current?.scrollTop;

      const pageHeight = window.innerHeight;

      if (deltaY > 0) {
        // 스크롤 내릴 때
        if (scrollTop! >= 0 && scrollTop! < pageHeight) {
          // 2페이지로 이동
          outerDivRef.current?.scrollTo({
            top: pageHeight,
            left: 0,
            behavior: "smooth",
          });
        } else if (scrollTop! >= pageHeight && scrollTop! < pageHeight * 2) {
          // 3페이지로 이동
          outerDivRef.current?.scrollTo({
            top: pageHeight * 2,
            left: 0,
            behavior: "smooth",
          });
        }
      } else {
        // 스크롤 올릴 때
        if (scrollTop! > 0 && scrollTop! <= pageHeight) {
          // 1페이지로 이동
          outerDivRef.current?.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        } else if (scrollTop! > pageHeight && scrollTop! <= pageHeight * 2) {
          // 2페이지로 이동
          outerDivRef.current?.scrollTo({
            top: pageHeight,
            left: 0,
            behavior: "smooth",
          });
        }
      }

      // 스크롤 이동이 끝난 후 플래그를 해제
      setTimeout(() => {
        setIsScrolling(false);
      }, 1000); // 스크롤 애니메이션 시간과 동일하게 설정
    };

    const outerDivRefCurrent = outerDivRef.current;
    outerDivRefCurrent?.addEventListener("wheel", handleScroll);

    return () => {
      outerDivRefCurrent?.removeEventListener("wheel", handleScroll);
    };
  }, [isScrolling]);

  return (
    <div
      ref={outerDivRef}
      className="scrollbar-hide outer lg:h-[100vh] overflow-y-auto flex flex-col"
    >
      <div className="inner lg:h-[100vh]">
        <HomeStart />
      </div>
      <div className="inner lg:h-[100vh]">
        <ShowDate />
      </div>
      <div className="inner lg:h-[100vh]">
        <HomeLast />
      </div>
    </div>
  );
};

export default Home;
