function calc(num1, num2, num3) {
  const promise = new Promise((resolve, reject) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number') reject(new Error("Informe apenas números"));

    const resultado = (num1 + num2) * num3;
    
    if (resultado < 50) reject(new Error("Valor muito baixo"));
    resolve(resultado)
  });

  return promise;
}

function randomNum() {
  return Math.floor(Math.random() * 100 + 1);
}

async function chamaCalc () {
  const num1 = randomNum()
  const num2 = randomNum()
  const num3 = randomNum()
  await calc(num1, num2, num3)
  .then(result => console.log(`sucesso: ${result}`))
  .catch(err => console.log(`erro: ${err.message}`));
}

chamaCalc()
