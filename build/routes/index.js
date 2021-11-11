"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const userActivityController_1 = require("../controlers/userActivityController");
const router = (0, express_1.Router)();
// async function validation(req: Request, res: Response, next: NextFunction) {
//   if (!req.is('application/json')) {
//     console.log(1111111111);
//     res.status(406)
//       .send({ status: 406, Message: "Not Acceptable" });
//   } else {
//     next()
//   }
// }
router.get("/github-user-activity/:username", (0, express_async_handler_1.default)(userActivityController_1.getUserActivity));
exports.default = router;
