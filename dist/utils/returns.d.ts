import Validator from '../types/Validator';
/**
* Wraps a function in a validator which checks its return value, and throws an error if the return value is bad.
*
* @param func - the function to wrap
* @param validator - the validator function.  This gets passed the return value
* @param message - an optional message string to pass into the error thrown
* @returns a wrapped function that throws an error if the return value doed not pass validation
* @memberof vet.utils
*/
declare function returns(func: any, validator: Validator, message?: any): (this: any, ...args: any[]) => any;
export = returns;
