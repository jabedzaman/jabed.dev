import {
  getGithubRepos,
  getGithubStats,
} from "../controllers/github.controller";
import { Router } from "express";

const router = Router();

router.get("/stats", getGithubStats);
router.get("/repos", getGithubRepos);

export { router as githubRoutes };
