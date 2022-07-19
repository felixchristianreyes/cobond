import { useEffect, useState } from "react";

//joins classes
export const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
}

//get window offsetY position
export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener("scroll", updatePosition);

    updatePosition();

    return () => window.removeEventListener("scroll", updatePosition);
  }, []);
  return scrollPosition;
};

