
const REGEX = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/g;

const isProbablyURL = (val) => {
	REGEX.lastIndex = 0;
	return REGEX.test(val);
};

module.exports = isProbablyURL;
