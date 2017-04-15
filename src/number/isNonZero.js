
const isNumber = require('./isNumber');

const isNonZero = (val) => isNumber(val) && val !== 0;

module.exports = isNonZero;
