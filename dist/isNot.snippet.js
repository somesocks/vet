"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var isPositive_1 = __importDefault(require("./numbers/isPositive"));
var isNot_1 = __importDefault(require("./isNot"));
var isNotPositive = isNot_1.default(isPositive_1.default);
var a = isNotPositive(2);
