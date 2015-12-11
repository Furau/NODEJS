var util = require('util');

console.log(util.isRegExp('[ads]'));

console.log(util.isRegExp(new RegExp('/?')));

console.log(util.isRegExp({}));