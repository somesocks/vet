import Validator from '../types/Validator';
import ExtendedValidator from '../types/ExtendedValidator';
/**
* Builds an object validator that checks the properties of the object
* NOTE: This only checks enumerable properties
* @param validator - the validator function run against the array children
* @returns a function that returns true if the value is an object, and all of the object properties pass the validator
* @memberof vet.objects
*/
declare const isObjectOf: (validator: Validator<any>) => ExtendedValidator<object>;
export = isObjectOf;
