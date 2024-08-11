"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function messageBuilder(log) {
    return typeof log === 'function' ?
        log :
        function () { return log; };
}
/**
* Wraps a function in a validator which checks its return value, and throws an error if the return value is bad.
*
* @param func - the function to wrap
* @param validator - the validator function.  This gets passed the return value
* @param message - an optional message string to pass into the error thrown
* @returns a wrapped function that throws an error if the return value doed not pass validation
* @memberof vet.functions
*/
function returns(func, validator, message) {
    message = messageBuilder(message || 'vet/functions/returns error!');
    return function _returnsInstance() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _args = arguments;
        var result = func.apply(this, _args);
        if (validator(result)) {
            return result;
        }
        else {
            throw new Error(message.call(this, result));
        }
    };
}
exports.default = returns;
