console.log("code1");

// callback
setTimeout(() => {
  console.log("setTimeout 0");
}, 0);

console.log("code2");

// callback
setImmediate(() => {
  console.log("setImmediate");
});

console.log("code3");

// callback
process.nextTick(() => {
  console.log("process.nextTick()");
});

// in task queue
// nextTick() -> setTimeout -> setImmediate
