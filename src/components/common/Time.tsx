"use client";

import * as React from "react";
import moment from "moment";

export const Time: React.FC = React.memo(() => {
  const [time, setTime] = React.useState<Date | null>();
  const [isMounted, setIsMounted] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsMounted(true);
    return () => {
      setIsMounted(false);
    };
  }, []);

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (isMounted) {
        setTime(new Date());
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [isMounted]);
  return (
    <span className="text-xs text-[#666666]">
      {time ? moment(time).format("HH:mm:ss") : '-- : -- : --'}
    </span>
  );
});

Time.displayName = "Time";
