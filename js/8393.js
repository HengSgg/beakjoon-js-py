// 문제
// n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 n (1 ≤ n ≤ 10,000)이 주어진다.

// 출력
// 1부터 n까지 합을 출력한다.

// 예제 입력 1 
// 3
// 예제 출력 1 
// 6

var fs = require('fs');
var input = fs.readFileSync('ex.txt').toString().split(' ');
var plusNum = parseInt(input[0]);

var result = 0
for(let i = 1; i <= plusNum; i++){
  result += i
}
console.log(result);