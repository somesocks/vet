import ExtendedValidator from '../types/ExtendedValidator.js';
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
declare const isValidDate: ExtendedValidator<Date>;
export default isValidDate;
