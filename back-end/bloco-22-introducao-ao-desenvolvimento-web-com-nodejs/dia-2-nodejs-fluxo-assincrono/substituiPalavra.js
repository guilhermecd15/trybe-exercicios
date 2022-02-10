const readline = require('readline-sync');
const fs = require('fs').promises;

async function ask() {
  const script = readline.question('Qual arquivo deseja abrir? ');

  try {
    const fileContent = await fs.readFile(script, 'utf8')
    const palavra1 = readline.question('Qual a palavra a ser subtituida? ');
    const palavra2 = readline.question('Qual a palavra subtituira? ');
    const newContent = fileContent.replace(new RegExp(palavra1, 'g'), palavra2);
    const newFile = readline.question('Qual o arquivo de destino? ');
    await fs.writeFile(newFile, newContent);
  } catch (e) {
    console.log('Arquivo inexistente');
  }
}

ask()