const { Worker } = require("worker_threads");
const express = require("express");
const app = express();
const port = 3000;


app.get("/", (req, res) => {
  res.status(200).json("easy Api");
});

app.get("/heavy", (req, res) => {
  const worker = new Worker("./worker-2.js");
  worker.on("message", (data) => {
    res.send(data);
  });
  worker.on("error", (err) => {
    res.send(err);
  });
});

app.listen(port, () => {
  console.log(`server running in ${port}`);
});

module.exports = app;
