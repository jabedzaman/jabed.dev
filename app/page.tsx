import { Suspense } from "react";
import HeadingText from "@/components/HeadingText";
import { info } from "@/consts";
import Link from "next/link";
import { BiTrendingUp } from "react-icons/bi";
import { IoPeopleOutline } from "react-icons/io5";
import { AiOutlineDesktop } from "react-icons/ai";
import { Octokit } from "@octokit/rest";

const page = async () => {
  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
  });
  const followers = await octokit.users.listFollowersForUser({
    username: "jabedzaman",
  });
  const repos = await octokit.repos.listForUser({
    username: "jabedzaman",
  });
  const total_stars = repos.data.reduce((acc, repo) => {
    return acc + repo.stargazers_count;
  }, 0);
  const public_repos = repos.data.length;
  const data = {
    total_followers: followers.data.length,
    total_stars,
    public_repos,
  };
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
        <div className="flex flex-row items-stretch space-x-2">
          <div>
            <BiTrendingUp className="inline-block mr-2" />
          </div>
          <div>
            Got {data?.total_followers} followers on{" "}
            <Link href={"/github"}>
              <Highlight>Github</Highlight>
            </Link>{" "}
            with {data?.total_stars} stars on {data?.public_repos} public repos.
          </div>
        </div>
        <div className="flex flex-row items-stretch space-x-2">
          <div>
            <AiOutlineDesktop className="inline-block mr-2" />
          </div>
          <div>Been coding for 728 hours since Jan &apos;23.</div>
        </div>
        <div className="flex flex-row items-stretch space-x-2">
          <div>
            <IoPeopleOutline className="inline-block mr-2" />
          </div>
          <div> 4325 views on this website.</div>
        </div>
      </div>
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
