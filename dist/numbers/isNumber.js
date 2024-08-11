"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = __importDefault(require("../utils/assert"));
/**
* Checks to see if a value is a number
* @param val - the value to check
* @returns true if the value is a number
* @memberof vet.numbers
*/
var isNumber = function isNumber(val) {
    return (typeof (val) === 'number') || (val instanceof Number);
};
isNumber.assert = (0, assert_1.default)(isNumber);
isNumber.schema = 'isNumber';
exports.default = isNumber;
