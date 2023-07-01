import { githubService } from "../services/github.service";
import { Request, Response } from "express";

export const getGithubStats = async (_: Request, res: Response) => {
  const githubStats = await githubService.getGithubStats();
  res.json(githubStats);
};

export const getGithubRepos = async (_: Request, res: Response) => {
  const githubRepos = await githubService.getGithubRepos();
  res.json(githubRepos);
};
