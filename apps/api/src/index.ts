import express, { Express } from "express";
import cors from "cors";
import helmet from "helmet";
import { json } from "body-parser";
import morgan from "morgan";
import "dotenv/config";
import { router } from "./routes/routes";

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
    limit: "50mb",
  })
);
app.use(morgan(process.env.NODE_ENV === "production" ? "combined" : "dev"));

app.use("/", router);
app.use(express.static("public"));
app.get("/favicon.ico", (req, res) => res.status(204));
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
