const readline = require('readline-sync');

async function fizzBuzz() {
  const num = readline.questionInt('Qual numero? ');
  return new Promise((resolve, reject) => {
    if (num % 3 === 0 && num % 5 === 0) {
      return resolve('FizzBuzz');
    }
    else if (num % 3 === 0) {
      return resolve('Fizz');
    }
    else if (num % 5 === 0) {
      return resolve('Buzz');
    }
    reject(num);
  })
  .then(console.log)
  .catch(console.error)
}

fizzBuzz()
