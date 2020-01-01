
import assert from './assert';

/**
* A utility function for building a react-compatible assertion from a Vet validator
*
* This is useful for some libraries (like React) that expect
* assertion-style validation.
* @name assertReact
* @param validator - the validator to wrap
* @param message - an optional message string to pass into the error
* @returns a function that returns null if the arguments pass validation, or throws an error if they do not
* @memberof vet.utils
*/
export = function assertReact(this : any, validator, msg ?: any) {
	validator = assert(validator, msg);
	return function(props, propName, componentName) {
		validator(props[propName]);
	};
};
