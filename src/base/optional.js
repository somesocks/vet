
const optional = (validator) => (val) => val == null || validator(val);

module.exports = optional;
