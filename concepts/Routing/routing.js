const http = require("http");

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      return res
        .writeHead(200, { "content-type": "text/plain" })
        .end("Home Page");
      break;
    case "/about":
      return res.writeHead(200).end("about");
      break;
    case "/contact":
      return res.writeHead(200).end("contact");
      break;
    case "/project":
      return res.writeHead(200).end(JSON.stringify({ project: "node-js" }));
      break;
    case "*":
      return res.writeHead(404).end("page not Found");
    default:
      res.writeHead(505).end("internal server error");
      break;
  }
});

server.listen(3000, () => {
  console.log("server running");
});

exports.module = http;
