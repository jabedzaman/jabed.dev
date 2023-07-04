import { youtubeService } from "~/services/youtube.service";
import { Request, Response } from "express";

const youtube = {
  getVideos: async (_: Request, res: Response) => {
    const response = await youtubeService.getVideos();
    res.send(response);
  },
  getStats  : async (_: Request, res: Response) => {
    const response = await youtubeService.getStats();
    res.send(response);
  }
  
};

export default youtube;