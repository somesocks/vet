"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var assert_1 = __importDefault(require("../utils/assert"));
var isArray_1 = __importDefault(require("./isArray"));
/**
* Constructor to build an array length validator
* @param len - the length the array shouldbe
* @returns a function that returns true if the value is an array of length len
* @memberof vet.arrays
* @example
* ```javascript
* let isLength from 'vet/arrays/isLength');
*
* let isLength3 = isLength(3);
*
* isLength3(null); // returns false
* isLength3({}); // returns false
* isLength3([ 1, 2 ]); // returns false
*
* isLength3([ '1', '2', '3' ]); // returns true
* ```
*/
function isLength(len) {
    var res = function (val) {
        return isArray_1.default(val) && val.length === len;
    };
    res.assert = assert_1.default(res);
    return res;
}
module.exports = isLength;
