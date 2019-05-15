
type validator = (val : any) => boolean;

type message = string | ((val : any) => string);

type func = (...vals: any[]) => any;

/**
* Wraps a function in a validator which checks its return value, and throws an error if the return value is bad.
*
* @param func - the function to wrap
* @param validator - the validator function.  This gets passed the return value
* @param message - an optional message string to pass into the error thrown
* @returns a wrapped function that throws an error if the return value doed not pass validation
* @memberof vet.utils
*/
declare function returns(source : func, validator: validator, log? : message): func;

export default returns;
