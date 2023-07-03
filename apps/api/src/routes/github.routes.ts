import gitub from "../controllers/github.controller";
import { Router } from "express";

const router = Router();

router.get("/", gitub.stats);
router.get("/repos", gitub.repos);

export { router as githubRoutes };
