
import Assertion from './types/Assertion';
import Validator from './types/Validator';
import ExtendedValidator from './types/ExtendedValidator';

import assert from './utils/assert';

/**
* Constructs a function that checks equality against any number of arguments
* @param {...*} eq - values to check equality against
* @returns a function that takes in a parameter val, and returns true if val is NOT equal to any of the options in ...eq
* @memberof vet
* @example
* ```javascript
* let isNoneOf from 'vet/isNoneOf');
*
* let check = isNoneOf(1, 2, 3);
*
* check(1); // returns false
*
* check(4); // returns true
* ```
*/
function isNoneOf(...args : any[]) : ExtendedValidator {
	const validators = arguments;

	const res : ExtendedValidator = function (val) {
		for (let i = 0; i < validators.length; i++) {
			const validator = validators[i];
			const check = typeof validator === 'function' ?
				validator(val) :
				(val === validator);

			if (check) { return false; }
		}

		return true;
	} as ExtendedValidator;

	res.assert = assert(res);

	return res;
}

export = isNoneOf;
