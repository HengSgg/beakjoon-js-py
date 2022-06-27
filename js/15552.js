var fs = require('fs');
var input = fs.readFileSync('ex.txt').toString().split('\n');
var caseNum = parseInt(input[0]);
let result = `${parseInt(input[1].split(' ')[0]) + parseInt(input[1].split(' ')[1])}`

for(let i = 2; i <= caseNum; i++){
  result += `\n${parseInt(input[i].split(' ')[0]) + parseInt(input[i].split(' ')[1])}`
}
console.log(result);
