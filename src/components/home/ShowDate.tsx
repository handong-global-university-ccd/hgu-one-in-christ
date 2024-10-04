import { useEffect, useRef, useState } from "react";
import useCountUp from "../../hooks/useCountUp";
import { useSpring, animated } from "@react-spring/web";

const SCROLL_POINT = 100;
const START_DATE = 21;
const END_DATE = 28;

const ShowDate = () => {
  const ref = useRef(null);
  const [count, setCount] = useState(START_DATE);
  const [springs, api] = useSpring(() => ({
    x: 0,
    config: { tension: 130, friction: 30 },
  }));

  const handleScroll = () => {
    if (ref.current) {
      const scrollY = window.scrollY; // 현재 스크롤 위치
      const viewportHeight = window.innerHeight - 40; // 현재 뷰포트 높이

      if (scrollY >= SCROLL_POINT && scrollY <= viewportHeight) {
        const scrollPercentage =
          (scrollY - SCROLL_POINT) / (viewportHeight - SCROLL_POINT); // 100부터 뷰포트 높이까지 비율 계산
        api.start({
          x: scrollPercentage * 960,
        });

        const newCount = Math.floor(
          START_DATE + scrollPercentage * (END_DATE - START_DATE)
        );
        setCount(newCount);
      } else if (scrollY < SCROLL_POINT) {
        api.start({ x: 0 });
        setCount(START_DATE);
      } else {
        api.start({ x: 960 });
        setCount(END_DATE);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [api]);

  return (
    <div ref={ref} className={`w-full h-[100px] mb-[264px]`}>
      <animated.p
        style={springs}
        className={`font-Menda_Medium text-[46px] text-primary-white`}
      >{`2024.10.${count}`}</animated.p>
    </div>
  );
};

export default ShowDate;
