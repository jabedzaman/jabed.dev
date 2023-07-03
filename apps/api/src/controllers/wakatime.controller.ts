import { wakatimeService } from "~/services/wakatime.service";
import { Request, Response } from "express";

const wakatime = async (_: Request, res: Response) : Promise<void> => {
  const data = await wakatimeService();
  res.json(data);
};

export default wakatime;