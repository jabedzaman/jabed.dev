import "dotenv/config";
import { axiosClient } from "~/helpers/axios_client";

export const githubService = {
  getGithubStats: async () => {
    const { data } = await axiosClient.get(
      `https://api.github.com/users/jabedzaman`,
      {
        headers: {
          Authorization: `token ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`,
        },
      }
    );
    const { stars } = await axiosClient
      .get(`https://api.github.com/users/jabedzaman/repos`, {
        headers: {
          Authorization: `token ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`,
        },
      })
      .then((res) => {
        return {
          stars: res.data.reduce(
            (acc: number, repo: any) => acc + repo.stargazers_count,
            0
          ),
        };
      });

    return {
      name: data.name,
      company: data.company,
      blog: data.blog,
      location: data.location,
      email: data.email,
      hireable: data.hireable,
      public_repos: data.public_repos,
      public_gists: data.public_gists,
      followers: data.followers,
      following: data.following,
      total_repos: data.public_repos + data.total_private_repos,
      total_stars: stars,
      disk_usage: data.disk_usage,
      plan: data.plan?.name,
    };
  },
  getGithubRepos: async () => {
    const { data } = await axiosClient.get(
      "https://api.github.com/users/jabedzaman/repos",
      {
        headers: {
          Authorization: `token ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`,
        },
      }
    );
    if (!data) {
      return {
        total_repos: 0,
        total_stars: 0,
        repos: [],
        contributions: [],
      };
    }
    return {
      total_repos: data.length,
      total_stars: data.reduce(
        (acc: number, repo: any) => acc + repo.stargazers_count,
        0
      ),
      repos: data
        .sort(
          (a: any, b: any) =>
            b.stargazers_count +
            b.watchers_count +
            b.forks_count -
            (a.stargazers_count + a.watchers_count + a.forks_count)
        )
        .filter((repo: any) => !repo.fork)
        .map((repo: any) => ({
          name: repo.name,
          private: repo.private,
          description: repo.description,
          url: repo.html_url,
          language: repo.language,
          created_at: repo.created_at,
          updated_at: repo.updated_at,
          pushed_at: repo.pushed_at,
          size: repo.size,
          stargazers_count: repo.stargazers_count,
          watchers_count: repo.watchers_count,
          forks_count: repo.forks_count,
          open_issues_count: repo.open_issues_count,
          license: repo.license?.name,
        })),
      contributions: data
        .filter((repo: any) => repo.fork)
        .map((repo: any) => ({
          name: repo.name,
          private: repo.private,
          description: repo.description,
          url: repo.html_url,
          language: repo.language,
          created_at: repo.created_at,
          updated_at: repo.updated_at,
          pushed_at: repo.pushed_at,
          size: repo.size,
          stargazers_count: repo.stargazers_count,
          watchers_count: repo.watchers_count,
          forks_count: repo.forks_count,
          open_issues_count: repo.open_issues_count,
          license: repo.license?.name,
        })),
    };
  },
};
