let array = ['git','vs','html','css','java']
let resultado = '';
array = array.sort();

const substitui = (frase, parametro) => {
  if (frase.includes('x')) {
    resultado = (`Tryber ${parametro} aqui!`);
    console.log(`${resultado} Minhas cinco principais habilidades são:`);
  } else {
    resultado = frase;
    console.log(`${resultado} Minhas cinco principais habilidades são:`);
  }
  
  for (i = 0; i < array.length; i += 1){
    console.log(array[i]);
  }
}

substitui('Tryber x aqui!', 'bebeto');