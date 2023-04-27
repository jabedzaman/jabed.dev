import { Metadata } from "next";
import { NextPage } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blogs",
};

const page: NextPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Blogs</h1>
      <Link href="/posts/1">Blog 1</Link>
    </div>
  );
};

export default page;
