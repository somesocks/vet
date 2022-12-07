"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var isObjectOf_1 = __importDefault(require("./isObjectOf"));
var isNumber_1 = __importDefault(require("../numbers/isNumber"));
var a = (0, isObjectOf_1.default)(isNumber_1.default);
var b = { a: 1, b: 2, c: 3 };
var c = a(b);
