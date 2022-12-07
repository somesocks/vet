"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var assert_1 = __importDefault(require("./utils/assert"));
/**
* A function to check for null
* @param val - a value to check
* @returns true if val is strictly null
* @memberof vet
* @example
* ```javascript
* let isNull from 'vet/isNull');
*
* isNull(undefined); // returns false
* isNull({}); // returns false
*
* isNull(null); // returns true
* ```
*/
var isNull = function isNull(val) {
    return val === null;
};
isNull.assert = (0, assert_1.default)(isNull);
isNull.schema = 'isNull';
module.exports = isNull;
