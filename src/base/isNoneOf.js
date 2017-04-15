
const isOneOf = (...eq) => (val) => {
	for (const e of eq) {
		if (val === e) { return false; }
	}
	return true;
};

module.exports = isOneOf;
