import ExtendedValidator from '../types/ExtendedValidator.js';
/**
* construct a validator to check if a value is between two numbers
* @param {number} lower - the lower boundary value to check against
* @param {number} upper - the upper boundary value to check against
* @returns {function} - a validator function
* @memberof vet.numbers
*/
declare function isBetween(lower: number, upper: number): ExtendedValidator<number>;
declare namespace isBetween {
    var exclusive: (lower: number, upper: number) => ExtendedValidator<number>;
    var inclusive: (lower: number, upper: number) => ExtendedValidator<number>;
}
export default isBetween;
