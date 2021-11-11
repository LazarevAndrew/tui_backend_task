"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRepoBranches = exports.getUserRepos = void 0;
const apiClient_1 = require("./apiClient");
const getUserRepos = (userName) => apiClient_1.apiClient
    .get(`/users/${userName}/repos`);
exports.getUserRepos = getUserRepos;
const getRepoBranches = (repoFullName) => apiClient_1.apiClient
    .get(`/repos/${repoFullName}/branches`);
exports.getRepoBranches = getRepoBranches;
