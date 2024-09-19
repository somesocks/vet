import assert from '../utils/assert.js';
import isNumber from './isNumber.js';
/**
* Checks to see if a value is a negative number
* @param val - the value to check
* @returns true if the value is a negative number
* @memberof vet.numbers
*/
const isNegative = function isNegative(val) {
    return isNumber(val) && val < 0;
};
isNegative.assert = assert(isNegative);
isNegative.schema = 'isNegative';
export default isNegative;
