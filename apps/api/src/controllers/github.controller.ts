import { githubService } from "../services/github.service";
import { Request, Response } from "express";

const github = {
  stats: async (_: Request, res: Response) : Promise<void> => {
    const githubStats = await githubService.getGithubStats();
    res.json(githubStats);
  },

  repos: async (_: Request, res: Response) : Promise<void> => {
    const githubRepos = await githubService.getGithubRepos();
    res.json(githubRepos);
  },
};

export default github;
