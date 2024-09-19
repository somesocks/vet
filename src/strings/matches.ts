
import Assertion from '../types/Assertion.js';
import Validator from '../types/Validator.js';
import ExtendedValidator from '../types/ExtendedValidator.js';

import assert from '../utils/assert.js';

import isString from './isString.js';

/**
* Builds a function that checks to see if a value matches a regular expression
* @param regex - the regular expression to check against
* @returns a function that takes in a value val, and returns true if it is a string that matches regex
* @memberof vet.strings
*/
function matches(regex) : ExtendedValidator<string> {
	const res = function(val) {
		regex.lastIndex = 0;
		return isString(val) && regex.test(val);
	} as ExtendedValidator;

	res.assert = assert(res);
	res.schema = 'matches(' + regex + ')';

	return res;
}

export default matches;
