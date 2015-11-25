var fs = require('fs');
var buffer = fs.readFileSync(process.argv[2]);
var str = buffer.toString();
var stt = str.split('\n');
console.log(stt.length-1);