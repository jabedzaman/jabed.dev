import { healthController } from "../controllers/health.controller";
import { Router } from "express";

export const router = Router();

router.get("/", healthController);

export { router as healthRoutes };
