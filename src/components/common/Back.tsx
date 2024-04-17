"use client";

import * as React from "react";
import { useRouter, usePathname } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";

export const Back: React.FC = React.memo(() => {
  const router = useRouter();
  const isHome = usePathname() === "/";
  return (
    <div className="my-5">
      {!isHome && (
        <button className="text-sm items-center flex flex-row gap-1" onClick={() => router.back()}>
          <IoIosArrowBack  className="text-xs"/>
          <span className="link">Back</span>
        </button>
      )}
    </div>
  );
});

Back.displayName = "Back";
