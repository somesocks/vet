
/**
* Checks to see if a value is a Date
* @param val - the value to check
* @returns true if the value is a Date
* @memberof vet.dates
* @example
* ```javascript
* let isDate = require('vet/dates/isDate');
*
* isDate(null); // returns false
* isDate({}); // returns false
*
* isDate(new Date()); // returns true
* ```
*/
declare	function isDate(val : any): boolean;

export default isDate;
