import assert from '../utils/assert.js';
/**
* Checks to see if a value is a valid Date object
* @param val - the value to check
* @returns true if the value is a valid Date object
* @memberof vet.dates
* @example
* ```javascript
* let isValidDate from 'vet/dates/isValidDate');
*
* isValidDate(null); // returns false
* isValidDate({}); // returns false
* isValidDate(new Date(NaN)); // returns false
*
* isValidDate(new Date()); // returns true
* ```
*/
const isValidDate = function isValidDate(val) {
    return (val instanceof Date) && (!isNaN(val.getTime()));
};
isValidDate.assert = assert(isValidDate);
isValidDate.schema = 'isValidDate';
export default isValidDate;
