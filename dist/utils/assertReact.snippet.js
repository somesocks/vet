"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var isString_1 = __importDefault(require("../strings/isString"));
var assertReact_1 = __importDefault(require("./assertReact"));
var assertIsString = (0, assertReact_1.default)(isString_1.default);
assertIsString({}, 'abc', '');
