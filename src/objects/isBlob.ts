import ExtendedValidator from '../types/ExtendedValidator';
import assert from '../utils/assert';

/**
* Checks to see if a value is an blob
* @param val - the value to check
* @returns true if the value is a blob
* @memberof vet.objects
*/
const isBlob : ExtendedValidator<Blob> =
	function isBlob(val: any) { return val instanceof Blob; } as ExtendedValidator;

isBlob.assert = assert(isBlob);
isBlob.schema = 'isBlob';

export = isBlob;
