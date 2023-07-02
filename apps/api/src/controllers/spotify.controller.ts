import { spotifyService } from "../services/spotify.service";
import { Request, Response } from "express";

export const spotifyController = async (req: Request, res: Response) => {
  const data = await spotifyService.getSpotifyStats();
  res.json(data);
};
