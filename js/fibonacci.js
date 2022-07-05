function fibonacci(number) {
    let result = [0, 1];
    if (number === 0) {
      console.log([0]);
    }
    if (number === 1) {
      console.log([0, 1])
    }
    for (let i = 2; i <= number; i++){
      result.push(result[i - 2] + result[i - 1]);
      console.log(result);
    }
  }

fibonacci(100000)