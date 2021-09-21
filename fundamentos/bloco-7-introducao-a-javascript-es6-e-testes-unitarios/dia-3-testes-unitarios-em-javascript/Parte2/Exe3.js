const assert = require('assert');
// escreva a função sumAllNumbers aqui
function sumAllNumbers(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i += 1) {
    total += arr[i];
  }
  return total;
}


const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);