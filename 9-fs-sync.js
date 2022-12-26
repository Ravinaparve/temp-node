// Synchronous Approach

const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

console.log(first);
console.log(second);

writeFileSync("./content/third-sync.txt", "this is third file");

//the third arg is used to append to the existing content w/o overwriting the entire content
writeFileSync("./content/third-sync.txt", "this is third file", { flag: "a" });
