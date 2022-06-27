var fs = require('fs');
var input = fs.readFileSync('ex.txt').toString().split(' ');
var a = parseInt(input[0]);

for(let i = 1; i <= 9; i++){
  console.log(`${a} * ${i} = ${a*i}`)
}