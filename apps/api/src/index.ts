import express, { Express, Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { json } from "body-parser";
import { createWriteStream } from "fs";
import { join } from "path";
import { router } from "./routes/routes";
import "dotenv/config";
import logger from "./helpers/logger";

export const app: Express = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);
app.use(
  json({
    limit: "10mb",
  })
);
app.use(
  morgan("combined", {
    stream: createWriteStream(join(__dirname, "..", "combined.log"), {
      flags: "a",
    }),
  })
);
app.use(express.static("public"));
app.set("trust proxy", true);
app.set("json spaces", 2);

app.get("/", (_, res: Response) => res.redirect("/api/v1/health"));
app.get("/health", (_, res: Response) => res.redirect("/api/v1/health"));
app.use("/api/v1", router);
app.get("/favicon.ico", (_, res: Response) => res.status(204));
app.get("*", (_, res: Response) =>
  res.status(404).json({ message: "Not Found" })
);
app.use((err: Error, _: Request, res: Response) => {
  logger.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

app.listen(process.env.PORT, () => {
  logger.info(`Server is listening on port ${process.env.PORT}`);
});
