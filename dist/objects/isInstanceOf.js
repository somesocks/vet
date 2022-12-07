"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var assert_1 = __importDefault(require("../utils/assert"));
var schema_1 = __importDefault(require("../utils/schema"));
/**
* Checks to see if a value is an object and inherits a prototype from a constructor function
* @param con - the constructor function to check against
* @returns a validator to check if a value inherits that prototype
* @memberof vet.objects
*/
function isInstanceOf(con) {
    var validator = function _instanceOfValidator(val) {
        return ((val != null)
            && (Object(val) === val)
            && (val instanceof con));
    };
    validator.assert = (0, assert_1.default)(validator);
    validator.schema = 'isInstanceOf(' + (0, schema_1.default)(con) + ')';
    return validator;
}
module.exports = isInstanceOf;
