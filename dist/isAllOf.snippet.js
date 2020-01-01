"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var isInteger_1 = __importDefault(require("./numbers/isInteger"));
var isPositive_1 = __importDefault(require("./numbers/isPositive"));
var isAllOf_1 = __importDefault(require("./isAllOf"));
var isPositiveInteger = isAllOf_1.default(isPositive_1.default, isInteger_1.default);
var a = isPositiveInteger(2);
