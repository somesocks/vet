import ExtendedValidator from '../types/ExtendedValidator';
import assert from '../utils/assert';

/**
* Checks to see if a value is an blob
* @param val - the value to check
* @returns true if the value is a file
* @memberof vet.objects
*/
const isFile : ExtendedValidator<File> =
	function isFile(val: any) { return val instanceof File; } as ExtendedValidator;

isFile.assert = assert(isFile);
isFile.schema = 'isFile';

export = isFile;
