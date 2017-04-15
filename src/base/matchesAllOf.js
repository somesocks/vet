
const matchesAllOf = (...validators) => (val) => {
	for (const v of validators) {
		if (!v(val)) { return false; }
	}
	return true;
};

module.exports = matchesAllOf;
