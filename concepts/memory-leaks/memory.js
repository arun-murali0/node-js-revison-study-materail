const express = require("express");
const app = express();
const eventEmitter = require("events");
const eventEmit = new eventEmitter();

// global declaration always stores in the window so it always there so better to clear when there is no reference
let list = [];
// reference
app.get("/", (req, res) => {
  //   closure can also cause memory leak because it doesn't know when it's like always there
  list.push(function () {
    return req.header;
  });
});

// event may also causes memory leaks so always remove the events after that
eventEmit.on("start", () => {
  console.log("hello world");
});
// remove the events
eventEmit.removeListener("start");

// interval may cause memory leaks so it better toi clear after that
const interval = setInterval(() => {
  console.log("hello");
});
clearInterval(interval);
