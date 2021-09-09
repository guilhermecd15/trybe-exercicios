const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((arr, name) =>
    arr + name.split('').reduce((result, element) => (element.toUpperCase() === 'A') ? result + 1 : result, 0), 0);
}

assert.deepStrictEqual(containsA(), 20);
