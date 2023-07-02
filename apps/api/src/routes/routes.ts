import { Router } from "express";
import { healthRoutes } from "./health.routes";
import { wakatimeRoutes } from "./wakatime.routes";
import { githubRoutes } from "./github.routes";
import { spotifyRoutes } from "./spotify.routes";
import { gitlabRouter } from "./gitlab.routes";
import { discordRoutes } from "./discord.routes";

export const router: Router = Router();

router.use("/health", healthRoutes);
router.use("/wakatime", wakatimeRoutes);
router.use("/github", githubRoutes);
router.use("/spotify", spotifyRoutes);
router.use("/gitlab", gitlabRouter);
router.use("/discord", discordRoutes);

export { router as routes };
