import discord from "../controllers/discord.controller";
import { Router } from "express";

const router: Router = Router();

router.get("/", discord.stats);
router.get("/presence", discord.presence);

export { router as discordRoutes };
