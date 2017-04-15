
const isNumber = require('./isNumber');

const isZero = (val) => isNumber(val) && val === 0;

module.exports = isZero;
