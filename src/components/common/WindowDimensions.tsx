"use client";

import * as React from "react";

export const WindowDimensions: React.FC = React.memo(() => {
  const [dimensions, setDimensions] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  React.useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <p className="text-[#666666] text-xs">
      {dimensions.width} x {dimensions.height}
    </p>
  );
});

WindowDimensions.displayName = "WindowDimensions";
