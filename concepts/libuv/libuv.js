const crypto = require("crypto");

const start = Date.now();

const password = "arun";
const salt = "ksfbjkhf";

crypto.pbkdf2(password, salt, 10000, 512, "sha512", () => {
  console.log("hash", Date.now() - start);
});

exports.module = crypto;
