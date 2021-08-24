function imenor(numeros) {
  let indiceMenor = 0;
  for (let i in numeros) {
    if (numeros[i] < indiceMenor) {
      indiceMenor = i;
    }
  }
  return indiceMenor;
}

console.log(imenor([2, 4, 6, 7, 10, 0, -3]));