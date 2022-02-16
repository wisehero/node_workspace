const process = require("process");

console.log(process.execPath);
console.log(process.version);
console.log(process.pid);
console.log(process.ppid);
console.log(process.platform);
console.log(process.uptime());
console.log(process.cwd());
console.log(process.cpuUsage());

setTimeout(() => {
  console.log("setTimeout");
}, 0);

// Task 큐에 콜백함수가 있어도 그걸 무시하고 실행한다.
process.nextTick(() => {
  console.log("nextTick");
});
