
const isOneOf = (...eq) => (val) => {
	for (const e of eq) {
		if (val === e) { return true; }
	}
	return false;
};

module.exports = isOneOf;
