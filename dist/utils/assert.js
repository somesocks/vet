"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var schema_1 = __importDefault(require("./schema"));
function messageBuilder(validator, message) {
    if (typeof message === 'function') {
        return message;
    }
    else if (typeof message === 'string') {
        return function () { return message; };
    }
    else {
        return function (val) { return '(vet/utils/assert) value with schema `' + (0, schema_1.default)(val) + '` fails check against `' + (0, schema_1.default)(validator) + '`'; };
    }
}
function isFunction(val) { return typeof val === 'function'; }
/**
* Wraps a validator, and throws an error if it returns false.
*
* This is useful for some code that expects assertion-style validation.
* @param validator - the validator to wrap
* @param message - an optional message string to pass into the error
* @returns a function that returns null if the arguments pass validation, or throws an error if they do not
* @memberof vet.utils
*/
function assert(validator, message) {
    if (isFunction(validator)) {
        // defer to existing assertion on the validator
        if (isFunction(validator.assert)) {
            return validator.assert;
        }
        message = messageBuilder.apply(this, arguments);
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _args = arguments;
            if (validator.apply(this, _args)) {
                return true;
            }
            else {
                throw new Error(message.apply(this, _args));
            }
        };
    }
    else if (!validator) {
        message = messageBuilder.apply(this, arguments);
        throw new Error(message.apply(this));
    }
    else {
        return true;
    }
}
module.exports = assert;
