//different ways of accessing properties and methods from the "os module"
const os = require("os");

//1. info about current user
const user = os.userInfo();
console.log(user);

//2. method returns the system uptime in seconds
console.log(`the system uptime is ${os.uptime()} seconds`);

//3. saving values in an object
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
};

console.log(currentOS);
