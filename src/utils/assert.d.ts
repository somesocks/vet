
type validator = (val : any) => boolean;

type assertion = (val : any) => any;

type message = string | ((val : any) => string);

/**
* Wraps a validator, and throws an error if it returns false.
*
* This is useful for some code that expects assertion-style validation.
* @param validator - the validator to wrap
* @param message - an optional message string to pass into the error
* @returns a function that returns null if the arguments pass validation, or throws an error if they do not
* @memberof vet.utils
*/
declare function assert(val : validator | assertion, message? : message): assertion;

export default assert;
