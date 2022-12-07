

import Assertion from '../types/Assertion';
import Validator from '../types/Validator';
import ExtendedValidator from '../types/ExtendedValidator';


function messageBuilder(log) {
	return typeof log === 'function' ?
		log :
		function () { return log; }
	;
}

/**
* Wraps a function in a validator which checks its arguments, and throws an error if the arguments are bad.
*
* @param func - the function to wrap
* @param validator - the validator function.  This gets passed the arguments as an array
* @param message - an optional message string to pass into the error thrown
* @returns a wrapped function that throws an error if the arguments do not pass validation
* @memberof vet.functions
*/
function accepts(func, validator : Validator, message ?: any) {
	message = messageBuilder(message || 'vet/functions/accepts error!');

	return function wrapper(this : any, ...args : any[]){
		const _args = arguments;
		if (validator.apply(this, _args as any)) {
			return func.apply(this, _args);
		} else {
			throw new Error(message.apply(this, _args));
		}
	};
}

export = accepts;
