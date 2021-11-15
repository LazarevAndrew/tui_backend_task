import { Router } from "express";
import asyncHandler from "express-async-handler";

import getUserActivity from "../controlers/userActivityController";
import typeValidator from "../validators";

const router = Router();

router.get(
  "/github-user-activity/:username",
  typeValidator,
  asyncHandler(getUserActivity)
);

export default router;
