const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

assert.strictEqual(typeof myRemove, 'function')
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]);
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]);

let a = [1, 2 , 3, 4];
myRemove(a, 3)

assert.deepStrictEqual((a), [1, 2, 3, 4]);
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]);
