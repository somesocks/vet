
const REGEX = /^\s*data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@/?%\s]*)\s*$/gi;

const isProbablyDataURL = (val) => {
	REGEX.lastIndex = 0;
	return REGEX.test(val);
};

module.exports = isProbablyDataURL;
