"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var isNumber_1 = __importDefault(require("./numbers/isNumber"));
var isString_1 = __importDefault(require("./strings/isString"));
var isOneOf_1 = __importDefault(require("./isOneOf"));
var isNumberOrString = isOneOf_1.default(isNumber_1.default, isString_1.default);
var a = isNumberOrString(2);
