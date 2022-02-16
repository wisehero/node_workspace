// file System 안에 있는 프로미스들을 가리킴
const fs = require("fs").promises;

// read a file
fs.readFile("./text.txt", "utf-8")
  .then((data) => console.log(data))
  .catch(console.error);

// writing a file
fs.writeFile("./file.txt", "Hello, File System! :)").catch(console.error);

fs.appendFile("./file.txt", "Yo!, File System:)")
  .then(
    // copy file
    fs.copyFile("./file.txt", "./file2.txt").catch(console.error)
  )
  .catch(console.error);

// folder
fs.mkdir("sub-folder").catch(console.error);

fs.readdir("./").then(console.log).catch(console.error);
