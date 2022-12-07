import ValidatorType from '../types/ValidatorType';
declare type GenericFunc = (...args: any) => any;
/**
* Wraps a function in a validator which checks its return value, and throws an error if the return value is bad.
*
* @param func - the function to wrap
* @param validator - the validator function.  This gets passed the return value
* @param message - an optional message string to pass into the error thrown
* @returns a wrapped function that throws an error if the return value doed not pass validation
* @memberof vet.functions
*/
declare function returns<T extends GenericFunc, U extends Function>(func: T, validator: U, message?: any): (...args: Parameters<T>) => (ValidatorType<U> & ReturnType<T>);
export = returns;
