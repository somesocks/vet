"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var assert_1 = __importDefault(require("./utils/assert"));
var schema_1 = __importDefault(require("./utils/schema"));
/**
* Builds an curried equal function
* @param eq - value to check equality against
* @returns a function that takes in one parameter val, and returns true if val === eq
* @memberof vet
* @example
* ```javascript
* let equals from 'vet/equals');
*
* let is3 = equals(3);
*
* is3(null); // returns false
* is3({}); // returns false
*
* is3(3); // returns true
* ```
*/
function equals(eq) {
    var validator = function (val) { return val === eq; };
    validator.assert = (0, assert_1.default)(validator);
    validator.schema = 'equals(' + (0, schema_1.default)(eq) + ')';
    return validator;
}
module.exports = equals;
