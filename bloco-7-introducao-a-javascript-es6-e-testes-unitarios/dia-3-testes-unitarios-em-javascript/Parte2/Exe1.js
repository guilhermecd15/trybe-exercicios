const assert = require('assert');
// escreva a função addOne aqui
function addOne(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1){
    newArr.push(arr[i] + 1);
  }
  return newArr;
}

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);