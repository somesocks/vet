import Validator from '../types/Validator.js';
/**
* Wraps a function in a validator which checks its arguments, and throws an error if the arguments are bad.
*
* @param func - the function to wrap
* @param validator - the validator function.  This gets passed the arguments as an array
* @param message - an optional message string to pass into the error thrown
* @returns a wrapped function that throws an error if the arguments do not pass validation
* @memberof vet.functions
*/
declare function accepts(func: any, validator: Validator, message?: any): (this: any, ...args: any[]) => any;
export default accepts;
