import ExtendedValidator from '../types/ExtendedValidator';
/**
* construct a validator to check if a value is less than a number
* @param {number} bound - the boundary value to check agains
* @returns {function} - a validator function
* @memberof vet.numbers
*/
declare function isLessThan(bound: number): ExtendedValidator<number>;
declare namespace isLessThan {
    var exclusive: (bound: number) => ExtendedValidator<number>;
    var inclusive: (bound: number) => ExtendedValidator<number>;
}
export = isLessThan;
