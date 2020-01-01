"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var isString_1 = __importDefault(require("../strings/isString"));
var returns_1 = __importDefault(require("./returns"));
var toUpper = function (val) { return val.toUpperCase(); };
var toUpper2 = returns_1.default(toUpper, isString_1.default);
var a = toUpper2('abc');
