// Asynchronous Approach
// in async we use callback,
//callback => it is function that run after whatever functionality we are doing is complete
//e.g. similar to a event listener, whenever a button is clicked,the event listener will run a callback function,that is passed inside it

const { readFile, writeFile } = require("fs");

readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result); //returns the content inside the "first.txt" file => Hello ! this is first text file!
  const first = result;
  readFile("./content/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(result); //returns the content inside the "second.txt" file => Hello ! this is second text file!
    const second = result;
    writeFile(
      "./content/third-async.txt",
      "this is third async file",
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
      }
    );
  });
}); // callback hell  (alternatives are  : using promises / using async await)
