const fs = require("fs");

const readStream = fs.createReadStream("./file.txt", {
  highWaterMark: 8, // 64kbytes
  encoding: "utf-8",
});

readStream.on("data", (chunk) => {
  console.count("data");
});

readStream.on("error", (error) => {
  console.log(error);
});
