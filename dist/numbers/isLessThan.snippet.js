"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var isLessThan_1 = __importDefault(require("./isLessThan"));
var a = isLessThan_1.default(0);
var b = isLessThan_1.default.inclusive(0);
var c = isLessThan_1.default.exclusive(0);
