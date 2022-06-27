var fs = require('fs');
var input = fs.readFileSync('ex.txt').toString().split(' ');
var plusNum = parseInt(input[0]);

var result = 0
for(let i = 1; i <= plusNum; i++){
  result += i
}
console.log(result);