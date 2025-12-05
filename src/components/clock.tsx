"use client";

import moment from "moment";
import { useEffect, useState } from "react";

export function Clock() {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    // Set initial time on mount to avoid hydration mismatch
    setTime(new Date());

    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000); // Changed to 1000ms (1 second) - no need for 100ms

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="font-mono tabular-nums min-w-80 text-center sm:text-left">
      {time ? moment(time).format("h:mm:ss A") : "--:--:--"}
    </div>
  );
}
