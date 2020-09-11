/* eslint no-self-compare: "off" */

import Assertion from '../types/Assertion';
import Validator from '../types/Validator';
import ExtendedValidator from '../types/ExtendedValidator';

import assert from '../utils/assert';

/**
* Checks to see if a value is a finite number
* @param val - the value to check
* @returns true if the value is a finite number
* @memberof vet.numbers
*/
const isFinite : ExtendedValidator<number> = function isFinite(value) {
	// 1. If Type(number) is not Number, return false.
	if (typeof value !== 'number') {
		return false;
	}
	// 2. If number is NaN, +∞, or −∞, return false.
	if (value !== value || value === Infinity || value === -Infinity) {
		return false;
	}
	// 3. Otherwise, return true.
	return true;
} as ExtendedValidator;

isFinite.assert = assert(isFinite);
isFinite.schema = 'isFinite';

export = isFinite;
