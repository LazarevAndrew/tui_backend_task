"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserActivity = void 0;
const userActivityService_1 = require("../services/userActivityService");
function getUserActivity(req, res) {
    var _a, _b, _c, _d;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield (0, userActivityService_1.getUserReposWithBranches)(req.params.username);
            res.send(response);
        }
        catch (error) {
            res.status((_a = error.response) === null || _a === void 0 ? void 0 : _a.status)
                .send({ status: (_b = error.response) === null || _b === void 0 ? void 0 : _b.status, Message: (_d = (_c = error.response) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.message });
        }
    });
}
exports.getUserActivity = getUserActivity;
