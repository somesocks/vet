import assert from '../utils/assert.js';
import isNumber from './isNumber.js';
/**
* Checks to see if a value is a nonzero number
* @param val - the value to check
* @returns true if the value is a nonzero number
* @memberof vet.numbers
*/
const isNonZero = function isNonZero(val) {
    return isNumber(val) && val !== 0;
};
isNonZero.assert = assert(isNonZero);
isNonZero.schema = 'isNonZero';
export default isNonZero;
