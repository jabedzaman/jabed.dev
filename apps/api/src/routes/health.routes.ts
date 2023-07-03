import health from "../controllers/health.controller";
("../controllers/health.controller");
import { Router } from "express";

export const router = Router();

router.get("/", health.check);

export { router as healthRoutes };
