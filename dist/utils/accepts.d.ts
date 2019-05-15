
type validator = (val : any) => boolean;

type message = string | ((val : any) => string);

type func = (...vals: any[]) => any;

/**
* Wraps a function in a validator which checks its arguments, and throws an error if the arguments are bad.
*
* @param func - the function to wrap
* @param validator - the validator function.  This gets passed the arguments as an array
* @param message - an optional message string to pass into the error thrown
* @returns a wrapped function that throws an error if the arguments do not pass validation
* @memberof vet.utils
*/
declare function accepts(source : func, validator: validator, log? : message): func;

export default accepts;
