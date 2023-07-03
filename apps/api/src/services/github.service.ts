import "dotenv/config";
import { axiosClient } from "../helpers/axios_client";

export const githubService = {
  getGithubStats: async () => {
    const { data } = await axiosClient.get(`https://api.github.com/users`, {
      headers: {
        Authorization: `token ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`,
      },
    });
    return data;
  },
  getGithubRepos: async () => {
    const { data } = await axiosClient.get(
      "https://api.github.com/users/redwoodjs/repos",
      {
        headers: {
          Authorization: `token ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`,
        },
      }
    );
    return data;
  },
};
