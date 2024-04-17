"use client";

import * as React from "react";
import moment from "moment";

export const Time: React.FC = React.memo(() => {
  const [time, setTime] = React.useState(new Date());
  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <span className="text-xs text-[#666666]">
      {moment(time).format("HH:mm:ss")}
    </span>
  );
});

Time.displayName = "Time";
