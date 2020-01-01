"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var isBetween_1 = __importDefault(require("./isBetween"));
var a = isBetween_1.default(0, 1);
var b = isBetween_1.default.inclusive(0, 1);
var c = isBetween_1.default.exclusive(0, 1);
