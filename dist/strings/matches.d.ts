import ExtendedValidator from '../types/ExtendedValidator';
/**
* Builds a function that checks to see if a value matches a regular expression
* @param regex - the regular expression to check against
* @returns a function that takes in a value val, and returns true if it is a string that matches regex
* @memberof vet.strings
*/
declare function matches(regex: any): ExtendedValidator<string>;
export default matches;
