import React, { useEffect } from "react";
import { useRouter } from "next/router";

export default function github() {
  const router = useRouter();
  useEffect(() => {
    router.push("https://github.com/jabedzaman");
  }, []);
  return (
    <div className="flex items-center justify-center my-10">
      Redirecting to Github...
    </div>
  );
}
