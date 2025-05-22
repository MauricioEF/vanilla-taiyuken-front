const fs = require("fs");
const path = require("path");

const srcPath = path.join(__dirname,"../src/config.dev.js");
const destPath = path.join(__dirname,"../src/config.js");

fs.copyFileSync(srcPath,destPath);
console.log("Copied successfully")