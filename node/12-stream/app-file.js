const fs = require("fs");

const beforeMem = process.memoryUsage().rss;
fs.readFile("./file.txt", (_, data) => {
  fs.writeFile("./file2.txt", data, () => {});
  // calculate
  const afterMemb = process.memoryUsage.rss;
  const diff = afterMemb - beforeMem;
  const consumed = diff / 1024 / 1024;
  console.log(diff);
  console.log(`Consumed Memory : ${consumed}MB`);
});
