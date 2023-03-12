import React, { useEffect } from "react";
import { useRouter } from "next/router";

export default function demn() {
  const router = useRouter();
  useEffect(() => {
    router.push("https://demn.jabed.me/ ");
  }, []);
  return (
    <div className="flex items-center justify-center my-10">
      Redirecting to Demn...
    </div>
  );
}
