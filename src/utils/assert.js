
function messageBuilder(log) {
	return typeof log === 'function' ?
		log :
		function () { return log; }
	;
}

/**
* Wraps a validator, and throws an error if it returns false.
*
* This is useful for some code that expects assertion-style validation.
* @param validator - the validator to wrap
* @param message - an optional message string to pass into the error
* @returns a function that returns null if the arguments pass validation, or throws an error if they do not
* @memberof vet.utils
*/
function assert (validator, message) {
	message = messageBuilder(message || 'Vet.utils.assert error!');

	return function() {
		var args = arguments;
		if (validator.apply(undefined, args)) {
			return true;
		} else {
			throw new Error(message.apply(undefined,args));
		}
	};
}

module.exports = assert;
