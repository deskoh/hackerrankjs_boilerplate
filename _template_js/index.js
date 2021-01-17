'use strict';
const readline = require('readline');

const echo = (data) => data;

const rl = readline.createInterface({
  input: process.stdin,
});

rl.on('line', (line) => {
  process.stdout.write(`${line}\n`);
});

rl.on('close', () => {
  process.stdout.end();
});

module.exports = { echo }
