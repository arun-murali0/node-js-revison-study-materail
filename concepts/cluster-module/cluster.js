const express = require("express");
const cluster = require("cluster");
const PORT = 3000;
const os = require("os").cpus().length;

console.log(`total cores:${os}`);
console.log(`id ${process.pid}`);

const app = express();

if (cluster.isMaster) {
  for (let i = 1; i <= os; i++) {
    cluster.fork();
  }
}

app.get("/heavy", (req, res) => {
  for (let i = 1; i < 50_00_000; i++) {}
  res.json({ message: "heavy cpu usage" });
});

cluster.on("exit", (worker, signal) => {
  console.log(`${worker.process.pid}`);
  console.log("new cluster started");
  cluster.fork();
});

module.exports = cluster;
