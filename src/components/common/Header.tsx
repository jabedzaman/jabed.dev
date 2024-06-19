import * as React from "react";
import { Time } from "./Time";
import { LastVisit } from "./LastVisit";
import Link from "next/link";
import { sora } from "~/libs";
import { Handler } from "./Handler";

type Links = {
  label: string;
  href: string;
};

const links: Links[] = [
  { label: "posts", href: "/posts" },
  { label: "work", href: "/work" },
  { label: "stack", href: "/stack" },
];

export const Header: React.FC = React.memo(() => {
  return (
    <header>
      <div className="flex justify-between items-center mt-4">
        <Time />
        {process.env.NODE_ENV !== "development" && <LastVisit />}
      </div>
      <div className="flex justify-between items-center my-4">
        <Handler />
        <nav className="flex justify-center items-center gap-2">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-[#616161] hover:text-[#abaaaa]"
            >
              <span className={sora.className}>{link.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
});

Header.displayName = "Header";
