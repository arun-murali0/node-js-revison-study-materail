const fs = require("fs");
const path = require("path");
const zip = require("zlib");

const cZip = zip.createGzip();

const loc = path.join(__dirname, "file-1.txt");
const loc1 = path.join(__dirname, "file-2.txt.gz");
const loc2 = path.join(__dirname, "file-2.txt");

const readable = fs.createReadStream(loc, {
  encoding: "utf-8",
  highWaterMark: 2,
});

readable.pipe(cZip).pipe(fs.createWriteStream(loc1));

const writeableStream = fs.createWriteStream(loc2);

readable.pipe(writeableStream);

exports.module = fs;
