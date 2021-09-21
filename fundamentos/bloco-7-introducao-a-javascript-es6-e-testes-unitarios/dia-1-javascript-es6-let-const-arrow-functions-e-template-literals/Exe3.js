const fatorial = num => {
  resultado = 1;
  for (let i = 1; i <= num; i += 1) {
    resultado *=  i;
  }
  return resultado;
}

console.log(fatorial(4));