"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var isString_1 = __importDefault(require("../strings/isString"));
var accepts_1 = __importDefault(require("./accepts"));
var toUpper = function (val) { return val.toUpperCase(); };
var toUpper2 = (0, accepts_1.default)(toUpper, isString_1.default);
var a = toUpper2('abc');
