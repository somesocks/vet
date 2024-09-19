import assert from '../utils/assert.js';
import isString from './isString.js';
// eslint-disable-next-line no-useless-escape
const REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
/**
* Checks to see if a value is probably a valid email
* @param val - the value to check
* @returns true if val is probably a valid email
* @memberof vet.strings
*/
const isProbablyEmail = function isProbablyEmail(val) {
    REGEX.lastIndex = 0;
    return isString(val) && REGEX.test(val);
};
isProbablyEmail.assert = assert(isProbablyEmail);
isProbablyEmail.schema = 'isProbablyEmail';
export default isProbablyEmail;
