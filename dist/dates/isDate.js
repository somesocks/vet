import assert from '../utils/assert.js';
/**
* Checks to see if a value is a Date
* @param val - the value to check
* @returns true if the value is a Date
* @memberof vet.dates
* @example
* ```javascript
* let isDate from 'vet/dates/isDate');
*
* isDate(null); // returns false
* isDate({}); // returns false
*
* isDate(new Date()); // returns true
* ```
*/
const isDate = function isDate(val) { return val instanceof Date; };
isDate.assert = assert(isDate);
isDate.schema = 'isDate';
export default isDate;
