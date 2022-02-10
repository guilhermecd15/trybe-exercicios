const readline = require('readline-sync');
const fs = require('fs').promises;

async function ask() {
  const script = readline.question('Qual arquivo deseja abrir? ');

  try {
    const fileContent = await fs.readFile(script, 'utf8')
    console.log(fileContent);
  } catch (e) {
    console.log('Arquivo inexistente');
  }
}

ask()