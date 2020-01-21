"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var assert_1 = __importDefault(require("./utils/assert"));
/**
* A default validator, that always returns true.
* This can be useful to spec out parameters that you don't wish to validate,
* but need to document for future work.
* @param val - a value to check
* @returns true
* @memberof vet
* @example
* ```javascript
*
* import isAny from 'vet/isAny';
*
* isAny(null); // returns true
* isAny(undefined); // returns true
* isAny({}); // returns true
*
* ```
*/
var isAny = function isAny(val) {
    return true;
};
isAny.assert = assert_1.default(isAny);
module.exports = isAny;
