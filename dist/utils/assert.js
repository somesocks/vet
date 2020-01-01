"use strict";
function messageBuilder(log) {
    return typeof log === 'function' ?
        log :
        function () { return log; };
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
    message = messageBuilder(message || 'vet/utils/assert error!');
    if (isFunction(validator)) {
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
        throw new Error(message.apply(this));
    }
    else {
        return true;
    }
}
module.exports = assert;
