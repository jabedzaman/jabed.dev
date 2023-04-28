import { Metadata } from "next";
import { NextPage } from "next";

export const metadata: Metadata = {
  title: "Blogs",
};

const page: NextPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Blogs</h1>
    </div>
  );
};

export default page;
