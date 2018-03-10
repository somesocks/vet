
/**
* Checks to see if a value is a Date
* @param val - the value to check
* @returns true if the value is a Date
* @memberof vet.dates
*/
const isDate = (val) => val instanceof Date;

module.exports = isDate;
