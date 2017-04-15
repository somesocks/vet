
const isNumber = require('./isNumber');

const isPositive = (val) => isNumber(val) && val > 0;

module.exports = isPositive;
