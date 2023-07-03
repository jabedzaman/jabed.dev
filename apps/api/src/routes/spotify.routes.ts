import spotify from "~/controllers/spotify.controller";
import { Router } from "express";

const router = Router();

router.get("/", spotify.nowPlaying);
router.get("/playing", spotify.nowPlaying);

export { router as spotifyRoutes };
