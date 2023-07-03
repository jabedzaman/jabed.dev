import { gitlabService } from "../services/gitlab.service";
import { Request, Response } from "express";

const gitlab = {
  stats: async (_: Request, res: Response) : Promise<void> => {
    const stats = await gitlabService.getStats();
    res.json(stats);
  },

  projects: async (_: Request, res: Response) : Promise<void> => {
    const projects = await gitlabService.getProjects();
    res.json(projects);
  },
};

export default gitlab;