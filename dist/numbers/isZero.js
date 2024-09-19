import assert from '../utils/assert.js';
import isNumber from './isNumber.js';
/**
* Checks to see if a value is zero
* @param val - the value to check
* @returns true if the value is zero
* @memberof vet.numbers
*/
const isZero = function isZero(val) { return isNumber(val) && val === 0; };
isZero.assert = assert(isZero);
isZero.schema = 'isZero';
export default isZero;
