function iMaior(numeros) {
    let indiceMaior = 0;
    for (let i in numeros) {
      if (numeros[i] > indiceMaior) {
        indiceMaior = i;
      }
    }
    return indiceMaior;
  }
  
  console.log(iMaior([2, 3, 6, 7, 10, 1]));