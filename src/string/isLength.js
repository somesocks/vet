
const isString = require('./isString');

const isLength = (len) => (val) => isString(val) && val.length === len;

module.exports = isLength;
