"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var assert_1 = __importDefault(require("./utils/assert"));
/**
* A function to check for undefined
* @param val - a value to check
* @returns true if val is strictly undefined
* @memberof vet
* @example
* ```javascript
* let isUndefined from 'vet/isUndefined');
*
* isUndefined({}); // returns false
* isUndefined(null); // returns false
*
* isUndefined(undefined); // returns true
* ```
*/
var isUndefined = function isUndefined(val) {
    return val === undefined;
};
isUndefined.assert = assert_1.default(isUndefined);
isUndefined.schema = 'isUndefined';
module.exports = isUndefined;
