
const isNumber = require('./isNumber');

const isNegative = (val) => isNumber(val) && val < 0;

module.exports = isNegative;
