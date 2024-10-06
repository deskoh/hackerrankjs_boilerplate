process.stdin.resume();
process.stdin.setEncoding("ascii");

function processData(lines: string[]) {
  process.stdout.write(`${lines.length} read\n`);
}

let input = "";
process.stdin.on("data", function (data) {
  input += data.toString();
});

process.stdin.on("end", function () {
  const lines = input
    .trim()
    .split("\n")
    .map((str) => str.trim());
  processData(lines);
});
