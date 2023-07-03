import wakatime from "~/controllers/wakatime.controller";
import { Router } from "express";

const router = Router();

router.get("/", wakatime);

export { router as wakatimeRoutes };
