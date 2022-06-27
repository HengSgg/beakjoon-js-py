const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line)
  // input = line.split(' ').map(el => parseInt(el));
})
  .on('close', function () {
  let h = parseInt(input[0].split(' ')[0]);
  let m = parseInt(input[0].split(' ')[1]);
  let t = parseInt(input[1])

  let total_minute = h * 60 + m + t
  let hour = parseInt(total_minute / 60)
  if(hour >= 24) hour = hour % 24

  console.log(`${hour} ${total_minute%60}`)
  process.exit();
});