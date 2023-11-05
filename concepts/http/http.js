const http = require("http");
const fs = require("fs");
const path = require("path");
const name = {
  firstName: "Arun",
  lastName: "karthick",
};

const pathLoc = path.join(__dirname, "index.html");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  //   fs.createReadStream(pathLoc).pipe(res);
  const file = fs.readFileSync(pathLoc, "utf-8");
  res.end(file);
});

server.listen(3000, () => {
  console.log("server running in 3000");
});

exports.module = http;
