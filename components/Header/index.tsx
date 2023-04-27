"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type TabProps = {
  title: string;
  path: string;
  isActive?: boolean | false;
};

const tabs = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Guestbook",
    path: "/guestbook",
  },
  {
    title: "Projects",
    path: "/projects",
  },
  {
    title: "Blogs",
    path: "/posts",
  },
];

const Tab = ({ title, path, isActive }: TabProps) => {
  return (
    <Link
      href={path}
      className={`${
        isActive
          ? "text-indigo-500 border-b border-b-indigo-500"
          : "text-indigo-400"
      } `}
    >
      <div>
        <h1>{title}</h1>
      </div>
    </Link>
  );
};

function Index() {
  const pathname = usePathname();
  return (
    <div>
      <h2 className="text-xl pb-1 flex items-center gap-3 mt-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://avatars.githubusercontent.com/u/99767817?v=4"
          className="rounded-full border-none m-0 font-bold"
          height={50}
          width={50}
          alt="jabed"
        />
        Jabed Zaman
      </h2>
      <div className="flex flex-wrap space-x-2 mt-3 mb-5">
        {tabs.map((tab) => (
          <Tab
            key={tab.title}
            title={tab.title}
            path={tab.path}
            isActive={tab.path === pathname}
          />
        ))}
      </div>
    </div>
  );
}

export default Index;
