const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line)
})
  .on('close', function () {
  let h = parseInt(input[0].split(' ')[0]);
  let m = parseInt(input[0].split(' ')[1]);
  let t = parseInt(input[1])
  let result;

  result = m + t
  if(result > 60){
    m = result % 60
    h = h + parseInt(result / 60)
    if(h >= 24){
        h = h - 24
    }
    console.log(`${h} ${m}`)
  }else{
    console.log(`${h} ${result}`)
  }
  process.exit();
});
