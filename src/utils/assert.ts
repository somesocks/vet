
import Assertion from '../types/Assertion';

function messageBuilder(log) {
	return typeof log === 'function' ?
		log :
		function () { return log; }
	;
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
function assert (this : any, validator, message ?: any) : any {
	message = messageBuilder(message || 'vet/utils/assert error!');

	if (isFunction(validator)) {
		return function(this : any, ...args : any[]) {
			const _args = arguments;
			if (validator.apply(this, _args)) {
				return true;
			} else {
				throw new Error(message.apply(this, _args));
			}
		};
	} else if (!validator) {
		throw new Error(message.apply(this));
	} else {
		return true;
	}

}

export = assert;