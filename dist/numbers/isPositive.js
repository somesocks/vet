"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var assert_1 = __importDefault(require("../utils/assert"));
var isNumber_1 = __importDefault(require("./isNumber"));
/**
* Checks to see if a value is a positive number
* @param val - the value to check
* @returns true if the value is a positive number
* @memberof vet.numbers
*/
var isPositive = function isPositive(val) { return isNumber_1.default(val) && val > 0; };
isPositive.assert = assert_1.default(isPositive);
isPositive.schema = 'isPositive';
module.exports = isPositive;
