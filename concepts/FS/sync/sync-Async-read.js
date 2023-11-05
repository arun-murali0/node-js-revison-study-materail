const fs = require("fs");
const path = require("path");

console.log("first");

// sync
const file = fs.readFileSync(path.join(__dirname, "file.txt"), "utf-8");
console.log("data from sync", file);

console.log("second");

// async
const fileAsync = fs.readFile(
  path.join(__dirname, "file.txt"),
  "utf-8",
  (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log("data from async", data);
    }
  }
);



exports.module = fs;
