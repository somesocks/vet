"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var assert_1 = __importDefault(require("./utils/assert"));
var schema_1 = __importDefault(require("./utils/schema"));
/**
* Constructs a function that checks equality against any number of arguments
* @param {...*} eq - values to check equality against
* @returns a function that takes in a parameter val, and returns true if val is NOT equal to any of the options in ...eq
* @memberof vet
* @example
* ```javascript
* let isNoneOf from 'vet/isNoneOf');
*
* let check = isNoneOf(1, 2, 3);
*
* check(1); // returns false
*
* check(4); // returns true
* ```
*/
function isNoneOf() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var validators = arguments;
    var res = function (val) {
        for (var i = 0; i < validators.length; i++) {
            var validator = validators[i];
            var check = typeof validator === 'function' ?
                validator(val) :
                (val === validator);
            if (check) {
                return false;
            }
        }
        return true;
    };
    res.assert = (0, assert_1.default)(res);
    var s = 'isNoneOf(';
    for (var i = 0; i < validators.length; i++) {
        s += (0, schema_1.default)(validators[i]) + ', ';
    }
    s += ')';
    res.schema = s;
    return res;
}
module.exports = isNoneOf;
