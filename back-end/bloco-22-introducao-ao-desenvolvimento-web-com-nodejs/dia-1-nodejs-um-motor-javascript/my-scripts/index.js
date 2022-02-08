const readline = require('readline-sync');

console.log(`
1 - IMC
2 - Velocidade
3 - Sorteio
`)

const num = readline.questionInt('Qual script vc deseja abrir? ');

if (num == 1) {
  require('./imc')
}
else if (num == 2) {
  require('./velocidade')
}
else if (num == 3) {
  require('./sorteio')
}