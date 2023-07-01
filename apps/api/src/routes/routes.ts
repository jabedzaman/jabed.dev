import { Router } from "express";
import { healthRoutes } from "./health.routes";
import { wakatimeRoutes } from "./wakatime.routes";

export const router: Router = Router();

router.use("/health", healthRoutes);
router.use("/wakatime", wakatimeRoutes);

export { router as routes };
