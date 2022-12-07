"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var assert_1 = __importDefault(require("../utils/assert"));
var isNumber_1 = __importDefault(require("./isNumber"));
/**
* Checks to see if a value is a nonzero number
* @param val - the value to check
* @returns true if the value is a nonzero number
* @memberof vet.numbers
*/
var isNonZero = function isNonZero(val) {
    return (0, isNumber_1.default)(val) && val !== 0;
};
isNonZero.assert = (0, assert_1.default)(isNonZero);
isNonZero.schema = 'isNonZero';
module.exports = isNonZero;
