import { discordService } from "../services/discord.service";
import { Response, Request } from "express";

const discord = {
  stats: async (_: Request, res: Response): Promise<void> => {
    const data = await discordService.getDiscordStats();
    res.json(data);
  },

  presence: async (_: Request, res: Response): Promise<void> => {
    const data = await discordService.getDiscordPresence();
    res.setHeader("Content-Type", "image/svg+xml");
    res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
    res.send(data);
  },
};

export default discord;
