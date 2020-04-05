"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var assert_1 = __importDefault(require("./utils/assert"));
/**
* A function to check for undefined
* @param val - a value to check
* @returns true if val is strictly not undefined
* @memberof vet
* @example
* ```javascript
* let isNotUndefined from 'vet/isNotUndefined');
*
* isNotUndefined(undefined); // returns false
*
* isNotUndefined(null); // returns true
* isNotUndefined({}); // returns true
* ```
*/
var isNotUndefined = function isNotUndefined(val) {
    return val !== undefined;
};
isNotUndefined.assert = assert_1.default(isNotUndefined);
isNotUndefined.schema = 'isNotUndefined';
module.exports = isNotUndefined;
