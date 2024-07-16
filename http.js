const http = require("http");
const currencies = require("./currencies.json");
const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Currency Database</h1>");
  } else if (req.url === "/currencies") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(currencies));
  } else {
    res.writeHead(404);
  }

  res.end();
});

server.listen(PORT, () => {
  console.log("Server is now listening on", PORT);
});
