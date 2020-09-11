/* eslint no-self-compare: "off" */
/* eslint no-bitwise: "off" */

import Assertion from '../types/Assertion';
import Validator from '../types/Validator';
import ExtendedValidator from '../types/ExtendedValidator';

import assert from '../utils/assert';

import isNumber from './isNumber';

import isFinite from './isFinite';

const floor = function (val) { return Math.floor(val); };

/**
* Checks to see if a value is an integer
* @param val - the value to check
* @returns true if the value is an integer
* @memberof vet.numbers
*/
const isInteger : ExtendedValidator<number> = function isInteger(val) {
	return isNumber(val) && isFinite(val) && (floor(val) === val);
} as ExtendedValidator;

isInteger.assert = assert(isInteger);
isInteger.schema = 'isInteger';

export = isInteger;
