"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerUiOptions = void 0;
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'TUI Backend task service',
        version: '1.0.0',
    },
    tags: [
        {
            name: 'Github User Activity',
        },
    ],
};
const options = {
    swaggerDefinition,
    apis: ['./**/swagger/**/*.yaml'],
};
exports.swaggerUiOptions = {
    customJs: '../custom.js',
};
exports.default = (0, swagger_jsdoc_1.default)(options);
