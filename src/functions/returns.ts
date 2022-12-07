
import Assertion from '../types/Assertion';
import Validator from '../types/Validator';
import ExtendedValidator from '../types/ExtendedValidator';
import ValidatorType from '../types/ValidatorType';

function messageBuilder(log) {
	return typeof log === 'function' ?
		log :
		function () { return log; }
	;
}

type GenericFunc = (...args : any) => any;

/**
* Wraps a function in a validator which checks its return value, and throws an error if the return value is bad.
*
* @param func - the function to wrap
* @param validator - the validator function.  This gets passed the return value
* @param message - an optional message string to pass into the error thrown
* @returns a wrapped function that throws an error if the return value doed not pass validation
* @memberof vet.functions
*/
function returns<T extends GenericFunc, U extends Function>(func : T, validator : U, message ?: any) : (...args : Parameters<T>) => ( ValidatorType<U> & ReturnType<T> ) {
	message = messageBuilder(message || 'vet/functions/returns error!');

	return function _returnsInstance(this : any, ...args : any[]) {
		const _args = arguments;
		const result = func.apply(this, _args as any);

		if (validator(result)) {
			return result;
		} else {
			throw new Error(message.call(this, result));
		}
	};
}

export = returns;
