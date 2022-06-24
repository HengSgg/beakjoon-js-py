var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var a = parseInt(input[0]);
var b = parseInt(input[1]);

let result = ''

if(a < b) result = '<'
if(a > b) result = '>'
if(a === b) result = '=='

console.log(result)