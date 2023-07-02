import { discordService } from "../services/discord.service";
import { Response, Request } from "express";

export const discordStats = async (req: Request, res: Response) => {
  const data = await discordService.getDiscordStats();
  res.json(data);
};

export const discordPresence = async (req: Request, res: Response) => {
  const data = await discordService.getDiscordPresence();
    res.setHeader("Content-Type", "image/svg+xml");
    res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
    res.send(data);
};
