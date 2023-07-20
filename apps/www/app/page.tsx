import { Suspense } from "react";
import HeadingText from "@/components/HeadingText";
import { info } from "@/consts";
import Link from "next/link";
import { BiTrendingUp } from "react-icons/bi";
import { IoPeopleOutline } from "react-icons/io5";
import { AiOutlineDesktop } from "react-icons/ai";

const page = async () => {
  const github = await fetch("https://api.jabed.dev/api/v1/github", {
    cache: "no-cache",
  }).then((res) => {
    if (res.status === 200) {
      return res.json();
    }
    return null;
  });
  const wakatime = await fetch("https://api.jabed.dev/api/v1/wakatime", {
    cache: "no-cache",
  }).then((res) => {
    if (res.status === 200) {
      return res.json();
    }
    return null;
  });
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <HeadingText />
        <p>
          {getAge()} years old self-taught{" "}
          <Highlight>
            <Link href="/about">full stack developer</Link>
          </Highlight>
          . Profficent in building things for web and android. A wannabe nerd
          arch linux user along with vim as code editor. Indulges in anime.
          Loves to play video games.
        </p>
        <br />
        <p>
          Get in touch via{" "}
          <Link href="mailto:hi@jabed.dev">
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
      {github && wakatime && (
        <div className="mt-4">
          <div className="flex flex-row items-stretch space-x-2">
            <div>
              <BiTrendingUp className="inline-block mr-2" />
            </div>
            <div>
              Got {github?.followers} followers on{" "}
              <Link href={"/github"}>
                <Highlight>Github</Highlight>
              </Link>{" "}
              with {github?.total_stars} stars on {github?.public_repos} public
              repos.
            </div>
          </div>
          <div className="flex flex-row items-stretch space-x-2">
            <div>
              <AiOutlineDesktop className="inline-block mr-2" />
            </div>
            <div>
              Been coding for {wakatime?.total_coding_hours} since Jan &apos;23.
            </div>
          </div>
          <div className="flex flex-row items-stretch space-x-2">
            <div>
              <IoPeopleOutline className="inline-block mr-2" />
            </div>
            <div> 4325 views on this website.</div>
          </div>
        </div>
      )}
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
