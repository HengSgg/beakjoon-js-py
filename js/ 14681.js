const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(parseInt(line));
}).on('close', function () {
    let x = input[0];
    let y = input[1];
    var result;

    if(x>0 && y>0){
        result = 1
    }else if(x>0 && y<0){
        result = 4
    }else if(x<0 && y>0){
        result = 2
    }else if(x<0 && y<0){
        result = 3
    }else{
        result = 0
    }

  console.log(result)
  process.exit();
});
