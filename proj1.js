console.log("Hello World!");

//Include module getUser.js
const getUser = require('./getUser.js');

const debug = require('debug');

console.log(getUser.name);