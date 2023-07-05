import { Request, Response, NextFunction } from "express";
import "dotenv/config";

const { GUESTBOOK_ENABLED } = process.env;
const { X_API_KEY } = process.env;

const Middleware = {
  apiProtected(req: Request, res: Response, next: NextFunction) {
    if (GUESTBOOK_ENABLED === "true") {
      if (req.headers["x-api-key"] === X_API_KEY) {
        return next();
      } else {
        return res.status(401).json({
          error: "Unauthorized",
        });
      }
    } else {
      return res.status(500).json({
        error: "Guestbook is disabled",
      });
    }
  },
};

export default Middleware;