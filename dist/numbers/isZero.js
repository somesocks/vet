"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var assert_1 = __importDefault(require("../utils/assert"));
var isNumber_1 = __importDefault(require("./isNumber"));
/**
* Checks to see if a value is zero
* @param val - the value to check
* @returns true if the value is zero
* @memberof vet.numbers
*/
var isZero = function isZero(val) { return isNumber_1.default(val) && val === 0; };
isZero.assert = assert_1.default(isZero);
module.exports = isZero;
