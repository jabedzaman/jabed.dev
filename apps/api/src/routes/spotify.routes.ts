import { spotifyController } from "../controllers/spotify.controller";
import { Router } from "express";

const router = Router();

router.get("/", spotifyController);

export { router as spotifyRoutes}