// const path = require("./concepts/path/path");
// const emit = require("./concepts/events/events");
// const buffer = require("./concepts/streams/streams");
// const fs = require("./concepts/FS/sync/sync-Async-read");

// const fs = require("./concepts/FS/sync/write-async-sync");
// const fs = require("./concepts/streams/streams-2");
// const fs = require("./concepts/pipes/pipes");
// const http = require("./concepts/http/http");

// const http = require("./concepts/Routing/routing");
// const crypto = require("./concepts/libuv/libuv");
// const cluster = require("./concepts/cluster-module/cluster");

const app = require("./concepts/Worker-threads/worker-threads-1.js");

// setTimeout(() => console.log("set-timer-1"), 0);
// setTimeout(() => {
//   process.nextTick(() => console.log("inside time out call back"));
//   console.log("set-timer-2");
// }, 0);

// setTimeout(() => console.log("set-timer-3"), 0);

// process.nextTick(() => console.log("next-tick-1"));
// process.nextTick(() => {
//   console.log("next-tick-2");
//   process.nextTick(() => {
//     console.log("inner next tick");
//   });
// });
// process.nextTick(() => console.log("next-tick-3"));
// // console.log("end of next queue tick");

// Promise.resolve().then(() => console.log("promise task-1"));
// Promise.resolve().then(() => {
//   console.log("promise task-1");
//   process.nextTick(() => console.log("promise inner task"));
// });

// Promise.resolve().then(() => console.log("promise task-3"));

// const fs = require("fs");
// let start = Date.now();
// setImmediate(() => console.log("set immediate"));

// fs.readFile(__filename, () => console.log("read file-1", Date.now() - start));
// setTimeout(() => console.log("time out", Date.now() - start), 0);
// process.nextTick(() => console.log("next-tick"));
// Promise.resolve().then(() => console.log("promise-task"));

// for (let i = 1; i < 1000000; i++) {}
