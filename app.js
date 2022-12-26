const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to home Page");
  } else if (req.url === "/about") {
    res.end("This is about us page");
  } else {
    res.end(`
    <h1>Oops!</h1>
    <p>we can't find the page that you are looking for!</p>
    <a href="/">back home</a>`);
  }
});
server.listen(5000);
