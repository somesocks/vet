"use strict";
/* eslint no-self-compare: "off" */
/* eslint no-bitwise: "off" */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = __importDefault(require("../utils/assert"));
var isNumber_1 = __importDefault(require("./isNumber"));
var isFinite_1 = __importDefault(require("./isFinite"));
var floor = function (val) { return Math.floor(val); };
/**
* Checks to see if a value is an integer
* @param val - the value to check
* @returns true if the value is an integer
* @memberof vet.numbers
*/
var isInteger = function isInteger(val) {
    return (0, isNumber_1.default)(val) && (0, isFinite_1.default)(val) && (floor(val) === val);
};
isInteger.assert = (0, assert_1.default)(isInteger);
isInteger.schema = 'isInteger';
exports.default = isInteger;
