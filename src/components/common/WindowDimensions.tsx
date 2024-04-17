"use client";

import * as React from "react";

export const WindowDimensions: React.FC = React.memo(() => {
  const [dimensions, setDimensions] = React.useState({
    width: 0,
    height: 0,
  });

  const updateDimensions = React.useCallback(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  React.useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, [updateDimensions]);

  return (
    <p className="text-[#666666] text-xs">
      {dimensions.width} x {dimensions.height}
    </p>
  );
});

WindowDimensions.displayName = "WindowDimensions";
