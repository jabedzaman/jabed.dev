import { Octokit } from "@octokit/rest";

export function useGithub() {
  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
  });

  const getTotalStars = async () => {
    const { data } = await octokit.rest.search.repos({
      q: `user:jabedzaman`,
    });
    let totalStars = 0;
    data.items.forEach((item) => {
      totalStars += item.stargazers_count;
    });
    return totalStars;
  };

  const getFollowers = async () => {
    const { data } = await octokit.rest.users.getByUsername({
      username: `jabedzaman`,
    });
    return data.followers;
  };

  const getPublicRepos = async () => {
    const { data } = await octokit.rest.repos.listForUser({
      username: `jabedzaman`,
    });
    return data.length;
  };

  return {
    getTotalStars,
    getFollowers,
    getPublicRepos,
  };
}
