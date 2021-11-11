import {NextFunction, Request, Response, Router} from "express";
import asyncHandler from "express-async-handler";

import { getUserActivity } from "../controlers/userActivityController";

const router = Router();

// async function validation(req: Request, res: Response, next: NextFunction) {
//   if (!req.is('application/json')) {
//     console.log(1111111111);
//     res.status(406)
//       .send({ status: 406, Message: "Not Acceptable" });
//   } else {
//     next()
//   }
// }

router.get("/github-user-activity/:username",
  asyncHandler(getUserActivity)
);

export default router;
