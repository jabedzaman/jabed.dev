import { gitlabController } from "../controllers/gitlab.controller";
import { Router } from "express";

const router = Router();

router.get("/", gitlabController);

export { router as gitlabRouter}