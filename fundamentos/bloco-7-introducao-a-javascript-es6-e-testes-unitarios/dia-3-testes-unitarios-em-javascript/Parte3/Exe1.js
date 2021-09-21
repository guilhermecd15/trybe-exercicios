const assert = require('assert');

const greetPeople = (people) => {
  let greeting = 'Hello ';
  let newArr = [];

  for (const person in people) {
    newArr.push(greeting + people[person]);
  }
  return newArr;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.strictEqual(typeof greetPeople, 'function');
assert.deepStrictEqual(greetPeople(parameter), result);