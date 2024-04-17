import * as React from "react";
import { bricolage } from "~/libs";

export const Input: React.FC = React.memo(() => {
  return (
    <div className="my-5">
      <h1 className={`${bricolage.className} text-2xl`}>Guestbook</h1>
    </div>
  );
});

Input.displayName = "Input";
