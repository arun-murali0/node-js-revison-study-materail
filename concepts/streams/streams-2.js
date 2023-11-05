const fs = require("fs");
const path = require("path");

const loc = path.join(__dirname, "file-1.txt");
const loc1 = path.join(__dirname, "file-2.txt");

const readableStreams = fs.createReadStream(loc, {
  encoding: "utf-8",
  highWaterMark: 8,
});

const writableStreams = fs.createWriteStream(loc1);

readableStreams.on("data", (chunk) => {
  console.log(chunk);
  writableStreams.write(chunk);
});

exports.module = fs;
