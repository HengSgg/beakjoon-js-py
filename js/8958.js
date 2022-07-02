// 문제 8958
// "OOXXOXXOOO"와 같은 OX퀴즈의 결과가 있다. O는 문제를 맞은 것이고, X는 문제를 틀린 것이다. 문제를 맞은 경우 그 문제의 점수는 그 문제까지 연속된 O의 개수가 된다. 예를 들어, 10번 문제의 점수는 3이 된다.

const { count } = require("console");

// "OOXXOXXOOO"의 점수는 1+2+0+0+1+0+0+1+2+3 = 10점이다.

// OX퀴즈의 결과가 주어졌을 때, 점수를 구하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 테스트 케이스의 개수가 주어진다. 각 테스트 케이스는 한 줄로 이루어져 있고, 길이가 0보다 크고 80보다 작은 문자열이 주어진다. 문자열은 O와 X만으로 이루어져 있다.

// 출력
// 각 테스트 케이스마다 점수를 출력한다.

// 예제 입력 1 
// 5
// OOXXOXXOOO
// OOXXOOXXOO
// OXOXOXOXOXOXOX
// OOOOOOOOOO
// OOOOXOOOOXOOOOX
// 예제 출력 1 
// 10
// 9
// 7
// 55
// 30

// 내 풀이
const line = require("fs").readFileSync("/Users/baghyeongseog/coding/js/ing/ex.txt", "utf8");
let input = line.trim().split("\n");

for(let inputs = 1; inputs <= input[0]; inputs++){
    let result = 0;
    let count = 0;

    for(let i = 0; i < input[inputs].length; i++){

      if(input[inputs][i] === 'O'){
        count++
      }else{
        count = 0;
      }

      result += count
    }

  console.log(result)
}

// // 다른 사람 풀이 (이게 더 빠름; ㅋ)
// let input = require('fs').readFileSync('/Users/baghyeongseog/coding/js/ing/ex.txt').toString().split('\n');

// let num = input.length - 1; // 

// for (let i = 1; i <= num; i++) {
//   let count = 0;
//   let sum = 0;

//   for (let j = 0; j < input[i].length; j++) {
//     if (input[i][j] === "O") {
//       count++;
//     } else {
//       count = 0;
//     }
    
//     sum += count;
//   }
  
//   console.log(sum);
// }
