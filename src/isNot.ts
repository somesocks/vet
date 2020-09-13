
import Assertion from './types/Assertion';
import Validator from './types/Validator';
import ExtendedValidator from './types/ExtendedValidator';

import assert from './utils/assert';
import schema from './utils/schema';

/**
* a function that inverts the result of a validator
* @param {function} validator - validator to invert
* @returns a wrapper function that inverts the result of a validator
* @memberof vet
* @example
* ```javascript
* let isNot from 'vet/isNot');
* let isNumber from 'vet/numbers/isNumber');
*
* let check = isNot(isNumber);
*
* check(1); // returns false
*
* check(null); // returns true
* ```
*/
function isNot<T extends Function>(validator : T) : ExtendedValidator {
	const res : ExtendedValidator = function (this : any, ...args : any[]) {
		const args2 = arguments;
		return !validator.apply(this, args2 as any);
	} as ExtendedValidator;

	res.assert = assert(res);
	res.schema = 'isNot(' + schema(validator) + ')';

	return res;
}

export = isNot;
