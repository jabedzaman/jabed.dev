import { discordPresence,discordStats } from "../controllers/discord.controller";
import { Router } from "express";

const router : Router = Router();

router.get("/stats", discordStats);
router.get("/presence", discordPresence);

export { router as discordRoutes}