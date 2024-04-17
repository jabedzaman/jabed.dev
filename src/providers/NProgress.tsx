"use client";

import * as React from "react";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export function NProgressProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <ProgressBar
        color="#303030"
        startPosition={0.3}
      />
      {children}
    </div>
  );
}
