
const isString = require('./isString');

const isNotEmpty = (val) => isString(val) && val !== '';

module.exports = isNotEmpty;
