import gitlab from "~/controllers/gitlab.controller";
import { Router } from "express";

const router = Router();

router.get("/", gitlab.stats);
router.get("/projects", gitlab.projects);

export { router as gitlabRouter };
