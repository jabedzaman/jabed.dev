import { getNowPlaying } from "../services/spotify.service";
import { Request, Response } from "express";

export const spotifyController = async (req: Request, res: Response) => {
  const data = await getNowPlaying();
  res.json(data);
};
