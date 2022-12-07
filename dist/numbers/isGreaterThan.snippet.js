"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var isGreaterThan_1 = __importDefault(require("./isGreaterThan"));
var a = (0, isGreaterThan_1.default)(0);
var b = isGreaterThan_1.default.inclusive(0);
var c = isGreaterThan_1.default.exclusive(0);
