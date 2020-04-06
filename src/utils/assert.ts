
import Assertion from '../types/Assertion';

import schema from './schema';

function messageBuilder(this : any, validator, message ?: any) {
	if (typeof message === 'function') {
		return message;
	} else if (typeof message === 'string') {
		return	function () { return message; };
	} else {
		return function (val) { return '(vet/utils/assert) value with schema `' + schema(val)  + '` fails check against `' + schema(validator) + '`'; };
	}
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
	if (isFunction(validator)) {
		// defer to existing assertion on the validator
		if (isFunction(validator.assert)) { return validator.assert; }

		message = messageBuilder.apply(this, arguments as any);
		return function(this : any, ...args : any[]) {
			const _args = arguments;
			if (validator.apply(this, _args)) {
				return true;
			} else {
				throw new Error(message.apply(this, _args));
			}
		};
	} else if (!validator) {
		message = messageBuilder.apply(this, arguments as any);
		throw new Error(message.apply(this));
	} else {
		return true;
	}

}

export = assert;
