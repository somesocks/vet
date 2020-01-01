"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var isString_1 = __importDefault(require("../strings/isString"));
var assert_1 = __importDefault(require("./assert"));
var assertIsString = assert_1.default(isString_1.default);
assertIsString('abc');
assert_1.default('abc' === ('a' + 'bc'));
// this line should raise an error on compile, since 'abc' is not a boolean
// assert('abc');
