import assert from '../utils/assert.js';
import isNumber from './isNumber.js';
/**
* Checks to see if a value is a positive number
* @param val - the value to check
* @returns true if the value is a positive number
* @memberof vet.numbers
*/
const isPositive = function isPositive(val) { return isNumber(val) && val > 0; };
isPositive.assert = assert(isPositive);
isPositive.schema = 'isPositive';
export default isPositive;
