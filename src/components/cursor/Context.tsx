import { createContext, useContext, useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MousePosition = createContext<any>(undefined);
export const useMousePosition = () => useContext(MousePosition);

export const MouseContextProvider = ({ children }: Props) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoverNav, setHoverNav] = useState("default");

  const variants = {
    default: {
      top: mousePosition.y,
      left: mousePosition.x,
      x: "-50%",
      y: "-50%",
      zIndex: 1000,
    },
    big: {
      height: "300px",
      width: "300px",
      top: mousePosition.y,
      left: mousePosition.x,
      x: "-70%",
      y: "-70%",
      backgroundColor: "white",
      mixBlendMode: "difference",
      zIndex: 1000,
    },
    middle: {
      height: "150px",
      width: "150px",
      top: mousePosition.y,
      left: mousePosition.x,
      x: "-70%",
      y: "-70%",
      backgroundColor: "white",
      mixBlendMode: "difference",
      zIndex: 1000,
    },
    small: {
      top: mousePosition.y,
      left: mousePosition.x,
      x: "-70%",
      y: "-70%",
      backgroundColor: "white",
      mixBlendMode: "difference",
      zIndex: 1000,
    },
    person: {
      height: "10px",
      width: "10px",
      top: mousePosition.y,
      left: mousePosition.x,
      x: "-50%",
      y: "-50%",
      backgroundColor: "black",
      mixBlendMode: "normal",
      zIndex: 1000,
    },
  };

  const bigEnter = () => setHoverNav("big");
  const smallEnter = () => setHoverNav("small");
  const defaultEnter = () => setHoverNav("default");
  const personEnter = () => setHoverNav("person");
  const middleEnter = () => setHoverNav("middle");

  useEffect(() => {
    const handlePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handlePosition);

    return () => window.removeEventListener("mousemove", handlePosition);
  }, []);

  const value = {
    variants,
    bigEnter,
    smallEnter,
    defaultEnter,
    personEnter,
    middleEnter,
    hoverNav,
  };

  return (
    <MousePosition.Provider value={value}> {children} </MousePosition.Provider>
  );
};
