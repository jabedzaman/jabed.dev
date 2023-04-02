import { useEffect, useState } from "react";

export default (): number => { 
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [windowWidth]);
  return windowWidth;
};
