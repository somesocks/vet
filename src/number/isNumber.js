
/**
* Checks to see if a value is a number
* @param val - the value to check
* @returns true if the value is a number
* @memberof Vet.Number
*/
const isNumber = (val) => (typeof (val) === 'number') || (val instanceof Number);

module.exports = isNumber;
