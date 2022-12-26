const names = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternative_Method_exports");
console.log(data);

sayHi("Susan");
sayHi(names.john);
sayHi(names.peter);
