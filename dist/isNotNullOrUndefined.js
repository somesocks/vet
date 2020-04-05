"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var assert_1 = __importDefault(require("./utils/assert"));
/**
* A function to check for null or undefined
* @param val - a value to check against null and undefined
* @returns true if val is loosely not null (strictly not null or undefined)
* @memberof vet
* @example
* ```javascript
* let isNotNullOrUndefined from 'vet/isNotNullOrUndefined');
*
* isNotNullOrUndefined(null); // returns false
* isNotNullOrUndefined(undefined); // returns false
*
* isNotNullOrUndefined({}); // returns true
* ```
*/
var isNotNullOrUndefined = function isNotNullOrUndefined(val) {
    return val != null;
};
isNotNullOrUndefined.assert = assert_1.default(isNotNullOrUndefined);
isNotNullOrUndefined.schema = 'isNotNullOrUndefined';
module.exports = isNotNullOrUndefined;
