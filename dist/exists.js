"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var assert_1 = __importDefault(require("./utils/assert"));
/**
* Alias for `vet/isNotNullOrUndefined`
* @param val - value to check
* @returns true if val is not null or undefined
* @memberof vet
* @example
* ```javascript
*
* let exists from 'vet/exists');
*
* exists(null); // returns false
* exists(undefined); // returns false
* exists({}); // returns true
*
* ```
*/
var exists = function exists(val) {
    return val != null;
};
exists.assert = assert_1.default(exists);
module.exports = exists;
