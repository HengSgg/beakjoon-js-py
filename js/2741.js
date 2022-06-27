var fs = require('fs');
var input = fs.readFileSync('ex.txt').toString().split('\n');
var caseNum = parseInt(input[0]);
let result = `1`
let i = 1;

while(i < caseNum){
  result += `\n${i+1}`
  i++
}
console.log(result);