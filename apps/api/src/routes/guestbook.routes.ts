import guestbook from "~/controllers/guestbook.controller";
import Middleware from "~/middlewares/middleware";

import { Router } from "express";

const router = Router();

router.get("/", Middleware.apiProtected, guestbook.getSignatures);
router.post("/", Middleware.apiProtected, guestbook.addSignature);

export { router as guestbookRoutes };
