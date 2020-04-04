"use strict";
function messageBuilder(validator, message) {
    if (typeof message === 'function') {
        return message;
    }
    else if (typeof message === 'string') {
        return function () { return message; };
    }
    else if (typeof validator === 'function') {
        return function (val) { return '(vet/utils/assert) value (' + val + ') failed on function ' + validator.name; };
    }
    else {
        return function () { return '(vet/utils/assert) value failed'; };
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
