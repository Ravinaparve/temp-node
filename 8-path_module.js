const path = require("path");
console.log(path.sep); //output=>   \

//joins sequence of paths using path.sep
const filePath = path.join("/content", "sub-folder", "test.txt"); // o/p: \content\sub-folder\test.txt
console.log(filePath);

//returns the base file name
const base = path.basename(filePath);
console.log(base); //  test.txt

//returns the complete path right from the starting directory name to the final file
const absolute = path.resolve(__dirname, "content", "sub-folder", "test.txt");
console.log(absolute); //C:\Users\Siddhant\Desktop\Node_tutorial\content\sub-folder\test.txt
