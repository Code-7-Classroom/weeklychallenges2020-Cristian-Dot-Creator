const fs = require('fs');


let buffer = fs.readFileSync(process.argv[2]); 


var lines = buffer.toString().split('\n').length - 1;
console.log(lines);