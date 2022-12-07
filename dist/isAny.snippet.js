"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var isAny_1 = __importDefault(require("./isAny"));
var a = (0, isAny_1.default)(2);
var b = a;
isAny_1.default.assert(b);
var c = b;
