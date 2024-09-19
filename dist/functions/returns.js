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
    return function _returnsInstance(...args) {
        const _args = arguments;
        const result = func.apply(this, _args);
        if (validator(result)) {
            return result;
        }
        else {
            throw new Error(message.call(this, result));
        }
    };
}
export default returns;
