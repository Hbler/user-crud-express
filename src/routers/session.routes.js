import { Router } from "express";

import newSessionController from "../controllers/session.controllers";

const router = Router();

router.post("", newSessionController);

export default router;
