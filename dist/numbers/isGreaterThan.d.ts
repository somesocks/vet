import ExtendedValidator from '../types/ExtendedValidator';
/**
* construct a validator to check if a value is greater than a number
* @param {number} bound - the boundary value to check agains
* @returns {function} - a validator function
* @memberof vet.numbers
*/
declare function isGreaterThan(bound: number): ExtendedValidator;
declare namespace isGreaterThan {
    var exclusive: (bound: number) => ExtendedValidator;
    var inclusive: (bound: number) => ExtendedValidator;
}
export = isGreaterThan;
