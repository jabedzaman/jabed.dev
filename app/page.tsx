import type { NextPage } from "next";
import { Suspense } from "react";
import HeadingText from "@/components/HeadingText";
import { info } from "@/consts";
import Link from "next/link";

const page: NextPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <HeadingText />
        <p>
          {getAge()} years old self-taught
          <b className="text-blue-400"> full stack developer</b>. Profficent in
          building things for web and android. A wannabe nerd arch linux user
          along with vim as code editor. Indulges in anime. Loves to play video
          games.
        </p>
        <br />
        <p>
          Get to know more at {" "}
          <Link href="/about" className="text-blue-400 hover:text-blue-500">
            here
          </Link>
        </p>
      </div>
    </Suspense>
  );
};

export default page;

const getAge = () => {
  const birthDate = new Date(info.birthDate);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;
  return age;
};
