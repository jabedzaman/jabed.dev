import { Router } from "express";
import { healthRoutes } from "./health.routes";
import { wakatimeRoutes } from "./wakatime.routes";
import { githubRoutes } from "./github.routes";

export const router: Router = Router();

router.use("/health", healthRoutes);
router.use("/wakatime", wakatimeRoutes);
router.use("/github", githubRoutes);

export { router as routes };
