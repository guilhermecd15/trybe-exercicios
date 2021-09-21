const assert = require('assert');
// escreva a função removeMiddle aqui
function removeMiddle (arr) {
  let meio = (arr.length + 1) / 2;
  meio -= 1;
  const output = [arr[meio]];
  arr.splice(meio, 1);
  return output;
}

const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];
const output = removeMiddle(words);

assert.deepStrictEqual(output, expectedOutput);
assert.deepStrictEqual(words, expectedWords);