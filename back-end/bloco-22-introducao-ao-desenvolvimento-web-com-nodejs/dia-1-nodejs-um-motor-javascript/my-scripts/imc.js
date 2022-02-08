const readline = require('readline-sync');

const calcIMC = () => {
  const peso = readline.questionFloat('Qual seu peso? ');
  const altura = readline.questionFloat('Qual sua altura? ');
  let situacao = '';
  const imc = (peso/(altura * altura))
  if (imc <= 18.5) {
    situacao = 'Abaixo do peso (magreza)'
  }
  else if (imc > 18.5 && imc <= 25) {
    situacao = 'Peso normal'
  }
  else if (imc > 25 && imc <= 30) {
    situacao = 'Acima do peso (sobrepeso)'
  }
  else if (imc > 30 && imc <= 35) {
    situacao = 'obesidade grau I'
  }
  else if (imc > 35 && imc <= 40) {
    situacao = 'Obesidade grau II'
  }
  else {
    situacao = 'Obesidade graus III e IV'
  }
  console.log(`seu imc é: ${imc} e sua situação é: ${situacao}`)
}

calcIMC();

module.exports = calcIMC;
