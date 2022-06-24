var fs = require('fs'); // file system 모듈을 가져와서
var input = fs.readFileSync('/dev/stdin').toString().split(' '); 
var a = parseInt(input[0]);
var b = parseInt(input[1]);
console.log(a+b);