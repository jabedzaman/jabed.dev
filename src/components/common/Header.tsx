import * as React from "react";
import { Time } from "./Time";
import { LastVisit } from "./LastVisit";
import Link from "next/link";
import {
  BookOpen,
  Wrench,
  Pen,
  User,
  Handshake,
} from "@phosphor-icons/react/dist/ssr";

type Links = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

const links: Links[] = [
  {
    label: "about",
    href: "/",
    icon: <User className="w-5 h-5" />,
  },
  {
    label: "posts",
    href: "/posts",

    icon: <BookOpen className="w-5 h-5" />,
  },
  {
    label: "projects",
    href: "/projects",

    icon: <Wrench className="w-5 h-5" />,
  },
  { label: "work", href: "/work", icon: <Handshake className="w-5 h-5" /> },
  { label: "guestbook", href: "/guestbook", icon: <Pen className="w-5 h-5" /> },
];

export const Header: React.FC = React.memo(() => {
  return (
    <header>
      <div className="flex justify-between items-center mt-4">
        <Time />
        {process.env.NODE_ENV !== "development" && <LastVisit />}
      </div>
      <div className="flex justify-between items-center my-4">
        <Link href="/">Hey there👋</Link>
        <nav className="flex justify-center items-center gap-2">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-[#616161] hover:text-[#abaaaa]"
            >
              {link.icon}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
});

Header.displayName = "Header";
