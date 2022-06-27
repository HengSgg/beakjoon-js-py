// 문제
// 첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제

// 입력
// 첫째 줄에 N(1 ≤ N ≤ 100)이 주어진다.

// 출력
// 첫째 줄부터 N번째 줄까지 차례대로 별을 출력한다.

// 예제 입력 1 
// 5
// 예제 출력 1 
// *
// **
// ***
// ****
// *****

// var input = require('fs').readFileSync('ex.txt').toString()//.split(' ');
// var caseNum = parseInt(input[0]);
// var result = '*'

// for(let i = 1; i < caseNum; i++){
//   result += `\n${'*'.repeat(i+1)}`
// }

// console.log(result)

let input = require('fs').readFileSync('/dev/stdin').toString();

let star = "";

for (let i = 0; i < input; i++) {
  star += "*"
  console.log(star); 
}