"use strict";

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
});

// Buffer output until `end()` is called
// See https://nodejs.org/api/stream.html#stream_writable_cork
process.stdout.cork();

rl.on("line", (line) => {
  process.stdout.write(`${line}\n`);
});

rl.on("close", () => {
  process.stdout.end();
});
