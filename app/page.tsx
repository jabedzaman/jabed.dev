import { Suspense } from "react";
import HeadingText from "@/components/HeadingText";
import { info } from "@/consts";
import Link from "next/link";
import { URL } from "@/utils";
import { BiTrendingUp } from "react-icons/bi";
import { IoPeopleOutline } from "react-icons/io5";
import { AiOutlineDesktop } from "react-icons/ai";

const page = async () => {
  const data = await fetch(URL + "/api/v1/metrics").then((res) => res.json());
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <HeadingText />
        <p>
          {getAge()} years old self-taught{" "}
          <Highlight>full stack developer</Highlight>. Profficent in building
          things for web and android. A wannabe nerd arch linux user along with
          vim as code editor. Indulges in anime. Loves to play video games.
        </p>
        <br />
        <p>
          Get in touch via{" "}
          <Link href="mailto:jabed@tuta.io">
            <Highlight>email</Highlight>
          </Link>{" "}
          or{" "}
          <Link href="https://twitter.com/xenseee">
            <Highlight>twitter</Highlight>
          </Link>
          .
        </p>
      </div>
      <div className="mt-4">
        Check out{" "}
        <Link href="/posts">
          <Highlight>blogs</Highlight>
        </Link>{" "}
        or Drop a signature on{" "}
        <Link href="/guestbook">
          <Highlight>guestbook</Highlight>
        </Link>{" "}
        for future visitors.
      </div>
      <div className="mt-4">
        <BiTrendingUp className="inline-block mr-2" /> Got{" "}
        {data?.total_followers} followers on{" "}
        <Link href={"/github"}>
          <Highlight>Github</Highlight>
        </Link>{" "}
        with {data?.total_stars} stars on {data?.public_repos} public repos.
        <br />
        <AiOutlineDesktop className="inline-block mr-2" /> Been coding for 728
        hours since Jan &apos;23.
        <br />
        <IoPeopleOutline className="inline-block mr-2" /> 4325 views on this
        website.
      </div>
      <div className="md:py-36 py-0 ease-in-out duration-100 transform" />
    </Suspense>
  );
};

const Highlight = ({ children }) => (
  <span className="text-indigo-400 hover:text-indigo-500 transition-colors duration-300">
    {children}
  </span>
);

export default page;

const getAge = () => {
  const birthDate = new Date(info.birthDate);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;
  return age;
};
