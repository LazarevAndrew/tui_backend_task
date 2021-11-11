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
exports.getUserReposWithBranches = void 0;
const adapters_1 = require("../adapters");
function getUserReposWithBranches(userName) {
    return __awaiter(this, void 0, void 0, function* () {
        const { data: repos } = yield (0, adapters_1.getUserRepos)(userName);
        const requests = repos.filter(r => !r.fork).map((repo) => __awaiter(this, void 0, void 0, function* () {
            const { data: repoBranches } = yield (0, adapters_1.getRepoBranches)(repo.full_name);
            const result = {
                repoName: repo.name,
                ownerLogin: repo.owner.login,
                branches: repoBranches.map(r => ({
                    name: r.name,
                    lastCommitSha: r.commit.sha
                }))
            };
            return result;
        }));
        return yield Promise.all(requests);
    });
}
exports.getUserReposWithBranches = getUserReposWithBranches;
