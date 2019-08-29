
/**
* Checks to see if a value is a valid Date object
* @param val - the value to check
* @returns true if the value is a valid Date object
* @memberof vet.dates
* @example
* ```javascript
* let isValidDate = require('vet/dates/isValidDate');
*
* isValidDate(null); // returns false
* isValidDate({}); // returns false
* isValidDate(new Date(NaN)); // returns false
*
* isValidDate(new Date()); // returns true
* ```
*/
function isValidDate(val) {
	return (val instanceof Date) && (!isNaN(val.getTime()));
}

module.exports = isValidDate;
