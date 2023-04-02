import { useEffect, useState } from "react";

type dimensions = {
  height: number;
  width: number;
};

export default (): dimensions => {
  const [windowDimensions, setWindowDimensions] = useState<dimensions>({
    height: 0,
    width: 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [windowDimensions]);

  return windowDimensions;
};
