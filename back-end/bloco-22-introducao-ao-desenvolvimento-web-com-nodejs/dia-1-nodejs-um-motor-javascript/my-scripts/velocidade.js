const readline = require('readline-sync');

const calcVeolicade = () => {
  const distancia = readline.questionInt('Qual sua disntacia? ');
  const tempo = readline.questionInt('Qual seu tempo? ');
  
  const velocidade = (distancia / tempo)
 
  console.log(velocidade)
}

calcVeolicade();

module.exports = calcVeolicade;
