"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";

export const Back: React.FC = React.memo(() => {
  const router = useRouter();
  return (
    <button
      className="text-sm items-center flex flex-row gap-1"
      onClick={() => router.back()}
    >
      <IoIosArrowBack className="text-xs" />
      <span className="link">Back</span>
    </button>
  );
});

Back.displayName = "Back";
