function maisRepetido(numeros) {
  let numRepetido = 0;
  let cont = 0;
  let iNumRepetido = 0;
  for (let i in numeros) {
    for (let i2 in numeros) {
      if (numeros[i] === numeros[i2]) {
        cont += 1;
      }
    }
    if (cont > numRepetido) {
      numRepetido = cont;
      iNumRepetido = i;
    }
    cont = 0;
  }
  return numeros[iNumRepetido];
}

console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3]));