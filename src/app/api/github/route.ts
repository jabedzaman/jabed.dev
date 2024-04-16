import { Octokit } from "@octokit/rest";
import { githubConfig } from "~/config";

const octokit = new Octokit({
  auth: githubConfig.GITHUB_ACCESS_TOKEN,
});

export async function GET() {
  const { username } = githubConfig;

  const { data } = await octokit.repos.listForUser({
    username,
  });
  const { data: userData } = await octokit.users.listFollowersForUser({
    username,
  });
  const repos = data
    .filter((repo) => !repo.name.includes(username))
    .map((repo) => ({
      name: repo.name,
      url: repo.html_url,
      description: repo.description,
      stars: repo.stargazers_count,
    }));
  return new Response(
    JSON.stringify({
      total_stars: repos.reduce((acc, repo) => acc + Number(repo.stars), 0),
      total_repos: repos.length,
      repos,
      followers: userData.length,
    }),
    {
      headers: { "content-type": "application/json" },
    }
  );
}
