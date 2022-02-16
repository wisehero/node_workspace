const os = require("os");

console.log(os.EOL === "\n");
console.log(os.EOL === "\r\n");
console.log(os.arch()); // cpu 아키텍쳐
console.log(os.cpus());
console.log(os.freemem());
console.log(os.homedir());
