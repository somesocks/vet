
import Assertion from '../types/Assertion';
import Validator from '../types/Validator';
import ExtendedValidator from '../types/ExtendedValidator';

import assert from '../utils/assert';

import isNumber from './isNumber';

/**
* Checks to see if a value is zero
* @param val - the value to check
* @returns true if the value is zero
* @memberof vet.numbers
*/
const isZero : ExtendedValidator<number> =
	function isZero(val) { return isNumber(val) && val === 0; } as ExtendedValidator;

isZero.assert = assert(isZero);
isZero.schema = 'isZero';

export = isZero;
