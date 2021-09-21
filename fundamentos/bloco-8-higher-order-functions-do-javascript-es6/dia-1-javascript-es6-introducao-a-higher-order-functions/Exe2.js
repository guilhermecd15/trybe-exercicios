const verifica = (meuNumero, sortiado) => {
  console.log(sortiado);
  if (meuNumero != sortiado) {
    return "Tente novamente";
  }
  return "Parabéns você ganhou";
}

console.log(verifica(3, Math.floor(Math.random() * 5 + 1)));