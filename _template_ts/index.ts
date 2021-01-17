import readline = require('readline');

export const echo = (data: string): string => data;

const rl = readline.createInterface({
    input: process.stdin,
});

rl.on('line', (line) => {
  process.stdout.write(`${line}\n`);
});

rl.on('close', () => {
  process.stdout.end();
});
