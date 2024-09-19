/* eslint no-self-compare: "off" */
import assert from '../utils/assert.js';
/**
* Checks to see if a value is a finite number
* @param val - the value to check
* @returns true if the value is a finite number
* @memberof vet.numbers
*/
const isFinite = function isFinite(value) {
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
};
isFinite.assert = assert(isFinite);
isFinite.schema = 'isFinite';
export default isFinite;
