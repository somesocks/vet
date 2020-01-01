"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var isNumber_1 = __importDefault(require("./numbers/isNumber"));
var optional_1 = __importDefault(require("./optional"));
var isMaybeNumber = optional_1.default(isNumber_1.default);
var a = isMaybeNumber(2);
