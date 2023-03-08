import React, { useEffect } from "react";
import { useRouter } from "next/router";

export default function github() {
  const router = useRouter();
  useEffect(() => {
    router.push("https://youtube.com/c/xenseee");
  }, []);
  return (
    <div className="flex items-center justify-center my-10">
      Redirecting to Youtube...
    </div>
  );
}
