"use client";

import * as React from "react";
import Link from "next/link";
import { Back } from "./Back";
import { usePathname } from "next/navigation";

export const Handler: React.FC = React.memo(() => {
  const path = usePathname();
  return path !== "/" ? <Back /> : <span>Hey there👋</span>;
});

Handler.displayName = "Handler";