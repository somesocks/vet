"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var assert_1 = __importDefault(require("../utils/assert"));
var schema_1 = __importDefault(require("../utils/schema"));
var isArray_1 = __importDefault(require("./isArray"));
/**
* Builds an array validator that checks the children of the array
* @param val - the validator function run against the array children
* @returns a function that returns true if the value is an array, and all of the children pass the validator
* @memberof vet.arrays
* @example
* ```javascript
* let isString from 'vet/strings/isString');
* let isArrayOf from 'vet/arrays/isArrayOf');
*
* let isStringArray = isArrayOf(isString);
*
* isStringArray(null); // returns false
* isStringArray({}); // returns false
* isStringArray([ 1, 2, 3 ]); // returns false
*
* isStringArray([]); // returns true
* isStringArray([ '1', '2', '3' ]); // returns true
* ```
*/
function isArrayOf(validator) {
    var res = function (arr) {
        if (!isArray_1.default(arr)) {
            return false;
        }
        for (var i = 0; i < arr.length; i++) {
            if (!validator(arr[i])) {
                return false;
            }
        }
        return true;
    };
    res.assert = assert_1.default(res);
    res.schema = 'isArrayOf(' + schema_1.default(validator) + ')';
    return res;
}
module.exports = isArrayOf;
