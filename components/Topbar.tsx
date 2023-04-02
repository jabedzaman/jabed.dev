import Link from "next/link";
import React from "react";

type Props = {
  link: string;
  text: string;
};

function Topbar({ link, text }: Props) {
  return (
    <div className="bg-blue-400 font-semibold text-sm md:py-1 py-0.5">
        <div className="flex justify-center">
      <Link href={link}>
        <span>{text}</span>
      </Link>
        </div>
    </div>
  );
}

export default Topbar;
