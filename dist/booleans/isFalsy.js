"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var assert_1 = __importDefault(require("../utils/assert"));
/**
* Checks to see if a value is loosely false (falsy)
* @param val - the value to check
* @returns true if the value is loosely false
* @memberof vet.booleans
* @example
* ```javascript
* let isFalsy from 'vet/booleans/isFalsy');
*
* isFalse(true); // returns false
*
* isFalsy(null); // returns true
* isFalsy(false); // returns true
* ```
*/
var isFalsy = function isFalsy(val) {
    return !val;
};
isFalsy.assert = assert_1.default(isFalsy);
module.exports = isFalsy;
