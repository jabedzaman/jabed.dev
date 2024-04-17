"use client";

import * as React from "react";
import moment from "moment";

export const Header: React.FC = React.memo(() => {
  const [time, setTime] = React.useState(new Date());
  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <footer>
      <p className="text-xs">{moment(time).format("HH:mm:ss")}</p>
    </footer>
  );
});

Header.displayName = "Header";
