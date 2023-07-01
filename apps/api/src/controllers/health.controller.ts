import { health } from "../helpers/health.service";
import { Request, Response } from "express";

export const healthController = async (req: Request, res: Response) => {
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  const version = process.env.npm_package_version;
  const data = await health(ip as string, version as string);
  res.json(data);
};
