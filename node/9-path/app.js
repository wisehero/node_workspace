const path = require("path");

console.log(__dirname);
// /Users/wisehero/Documents/node_workspace/9-path
console.log(__filename);
// /Users/wisehero/Documents/node_workspace/9-path/app.js
console.log(path.sep);
console.log(path.delimiter);

// basename

console.log(path.basename(__filename)); // app.js
console.log(path.basename(__filename, ".js")); // app

// dirname

console.log(path.dirname(__filename));
//Users/wisehero/Documents/node_workspace/9-path

// extension
console.log(path.extname(__filename)); // .js

// parse
const parsed = path.parse(__filename);
console.log(parsed);
/*
{
  root: '/',
  dir: '/Users/wisehero/Documents/node_workspace/9-path',
  base: 'app.js',
  ext: '.js',
  name: 'app'
} */

// isAbsolute
console.log("isAbsolute?", path.isAbsolute(__dirname));
console.log("isAbsolute?", path.isAbsolute("../"));

// normalize
console.log(path.normalize("./folder/////////sub"));

// join

console.log(__dirname + "/" + "image");
// /Users/wisehero/Documents/node_workspace/9-path/image
console.log(path.join(__dirname, "image"));
// /Users/wisehero/Documents/node_workspace/9-path/image
