"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var isArrayOf_1 = __importDefault(require("./isArrayOf"));
var isArray_1 = __importDefault(require("./isArray"));
var a = "123";
var b = (0, isArrayOf_1.default)(isArray_1.default);
var c = b([[], [], []]);
