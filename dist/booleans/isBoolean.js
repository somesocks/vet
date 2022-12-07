"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var assert_1 = __importDefault(require("../utils/assert"));
/**
* Checks to see if a value is a boolean
* @param val - the value to check
* @returns true if the value is a boolean
* @memberof vet.booleans
*/
var isBoolean = function isBoolean(val) {
    // return val === true || val === false;
    return (typeof (val) === 'boolean') || (val instanceof Boolean);
};
isBoolean.assert = (0, assert_1.default)(isBoolean);
isBoolean.schema = 'isBoolean';
module.exports = isBoolean;
