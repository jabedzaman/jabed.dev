import youtube from "~/controllers/youtube.controller";
import { Router } from "express";

const router = Router();

router.get("/", youtube.getStats);
router.get("/videos", youtube.getVideos)

export { router as youtubeRoutes}
