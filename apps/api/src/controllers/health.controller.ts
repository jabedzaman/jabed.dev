import { healthService } from "../services/health.service";
import { Request, Response } from "express";

const health = {
  check: async (req: Request, res: Response) : Promise<void> => {
    const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
    const version = process.env.npm_package_version;
    const data = await healthService(ip as string, version as string);
    res.json(data);
  },
};
export default health;
