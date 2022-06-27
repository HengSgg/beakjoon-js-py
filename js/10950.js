var fs = require('fs');
var input = fs.readFileSync('ex.txt').toString().split('\n');
var caseNum = parseInt(input[0]);

for(let i = 1; i <= caseNum; i++){
  console.log(parseInt(input[i].split(' ')[0]) + parseInt(input[i].split(' ')[1]));
}
