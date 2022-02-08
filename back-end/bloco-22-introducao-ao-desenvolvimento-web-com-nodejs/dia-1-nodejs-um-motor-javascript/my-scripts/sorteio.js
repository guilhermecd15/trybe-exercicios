const readline = require('readline-sync');

const sorteio = () => {
  let jogarDeNovo = 'sim';
  while (jogarDeNovo === 'sim') {
    let num = readline.questionInt('Qual seu numero? (1 a 10) ');
    let numRandom = Math.floor(Math.random() * 9 + 1);
    
    if (num === numRandom) {
      console.log('parabens')  
    } else {
      console.log(`Opa, não foi dessa vez. O número era: ${numRandom}`)
    }
    jogarDeNovo = readline.question('Quer jogar de novo? ');
  }
}

sorteio();

module.exports = sorteio;
