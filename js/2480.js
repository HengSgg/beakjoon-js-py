var fs = require('fs');
var input = fs.readFileSync('ex.txt').toString().split(' ');
var a = parseInt(input[0]);
var b = parseInt(input[1]);
var c = parseInt(input[2]);

var x;

if(a === b && b === c){
  x = a
  console.log(10000 + 1000 * x);
}else if(a === b || a === c || b === c){
  x = a
  if(b===c) x = b
  console.log(1000 + 100 * x)
}else{
  console.log(100 * Math.max(a,b,c))
}