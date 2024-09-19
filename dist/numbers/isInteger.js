/* eslint no-self-compare: "off" */
/* eslint no-bitwise: "off" */
import assert from '../utils/assert.js';
import isNumber from './isNumber.js';
import isFinite from './isFinite.js';
const floor = function (val) { return Math.floor(val); };
/**
* Checks to see if a value is an integer
* @param val - the value to check
* @returns true if the value is an integer
* @memberof vet.numbers
*/
const isInteger = function isInteger(val) {
    return isNumber(val) && isFinite(val) && (floor(val) === val);
};
isInteger.assert = assert(isInteger);
isInteger.schema = 'isInteger';
export default isInteger;
