import ExtendedValidator from '../types/ExtendedValidator';
/**
* Checks to see if a value is an object and inherits a prototype from a constructor function
* @param con - the constructor function to check against
* @returns a validator to check if a value inherits that prototype
* @memberof vet.objects
*/
declare function isInstanceOf<T extends Function>(con: T): ExtendedValidator<T["prototype"]>;
export default isInstanceOf;
