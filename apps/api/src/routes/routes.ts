import { Router } from "express";
import { healthRoutes } from "./health.routes";

export const router: Router = Router();

router.use("/health", healthRoutes);

export { router as routes };
