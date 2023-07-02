import { gitlabService } from "../services/gitlab.service";
import { Request, Response } from "express";

export const gitlabController = async (req: Request, res: Response) => {
  const stats = await gitlabService.getStats();
  res.json(stats);
};
