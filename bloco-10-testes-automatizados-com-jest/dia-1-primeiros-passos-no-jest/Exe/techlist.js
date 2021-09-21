function techList(array, nome) {
  let a = [];
  array.sort();

  if (array.length === 0) {
    return 'Vazio!';
  } for (let i = 0; i < array.length; i += 1) {
    array[i] = {
      tech: array[i],
      name: nome,
    };
    a.push(array[i]);
  }
  return a;
}

module.exports = techList;
