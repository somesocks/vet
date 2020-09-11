
import Assertion from '../types/Assertion';
import Validator from '../types/Validator';
import ExtendedValidator from '../types/ExtendedValidator';

import assert from '../utils/assert';

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
const isDate : ExtendedValidator<Date> = function isDate(val) { return val instanceof Date; } as ExtendedValidator;

isDate.assert = assert(isDate);
isDate.schema = 'isDate';

export = isDate;
