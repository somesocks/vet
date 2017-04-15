
const REGEX = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/g;

/**
* Checks to see if a value is probably a valid URL
* @param val - the value to check
* @returns true if val is probably a valid URL
* @memberof Vet.String
*/
const isProbablyURL = (val) => {
	REGEX.lastIndex = 0;
	return REGEX.test(val);
};

module.exports = isProbablyURL;
