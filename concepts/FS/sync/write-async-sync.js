const fs = require("fs");
const path = require("path");

const path1 = path.join(__dirname, "write.txt");
const content = "hi!,I'M Arun karthick";

const writefile = fs.writeFileSync(path1, content);

const writeAsync = fs.writeFile(
  path1,
  "hiiiiii Arun karthick",
  { flag: "a" },
  (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  }
);

exports.module = fs;
