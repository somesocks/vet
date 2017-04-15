
const matchesOneOf = (...validators) => (val) => {
	for (const v of validators) {
		if (v(val)) { return true; }
	}
	return false;
};

module.exports = matchesOneOf;
