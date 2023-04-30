import { NextResponse } from "next/server";
import { Octokit } from "@octokit/rest";
import { socials } from "@/consts";

export type Repo = {
  name: string;
  description: string;
  stars: number;
  forks: number;
  url: string;
  isfork: boolean;
  language: string;
  created_at: string;
  topics: string[];
};

export async function GET(request: Request) {
  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
  });

  const { data: repos } = await octokit.repos.listForUser({
    username: socials.github,
  });
  const { data: followers } = await octokit.users.listFollowersForUser({
    username: socials.github,
  });
  const repoarr = repos.map((repo) => {
    return {
      name: repo.name,
      description: repo.description,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      url: repo.html_url,
      isfork: repo.fork,
      language: repo.language,
      created_at: repo.created_at,
      topics: repo.topics,
    };
  });
  let totalstars = 0 as number;
  repoarr.forEach((repo) => {
    totalstars += repo.stars as number;
  });
  return NextResponse.json({
    username: socials.github,
    total_stars: totalstars,
    total_followers: followers.length,
    public_repos: repos.length,
    repos: repoarr,
  });
}
