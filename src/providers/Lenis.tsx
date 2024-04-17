"use client";

import * as React from "react";
import { ReactLenis } from "@studio-freight/react-lenis";

export function LenisProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ReactLenis root>{children}</ReactLenis>;
}
