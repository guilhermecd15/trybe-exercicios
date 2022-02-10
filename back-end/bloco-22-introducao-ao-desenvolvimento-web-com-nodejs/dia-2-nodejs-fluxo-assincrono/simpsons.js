const fs = require('fs').promises;

const nomeDoArquivo = 'simpsons.json';

// fs.readFile(nomeDoArquivo, 'utf8')
//   .then((data) => JSON.parse(data))
//   .then((s) => s.map(({ id, name }) => console.log(`${id} - ${name}`)))
//   .catch((err) => {
//     console.error(`Não foi possível ler o arquivo ${nomeDoArquivo}\n Erro: ${err}`);
//     process.exit(1); // Encerra a execução do script e informa ao sistema operacional que houve um erro com código
//   });

// async function returnPromis(id) {
//   const simpsons = await fs.readFile(nomeDoArquivo, 'utf8')
//   .then((data) => JSON.parse(data))

//   const haveSimpsonsId = simpsons.find(s => s.id === id)
  
//   if (!haveSimpsonsId) throw new Error("id não encontrado");

//   console.log(haveSimpsonsId);
// }

// returnPromis('1')

// async function write() {
//   const simpsons = await fs.readFile(nomeDoArquivo, 'utf8')
//   .then((data) => JSON.parse(data))

//   const newArray = simpsons.filter(s => s.id != 10 && s.id != 6)
  
//   await fs.writeFile(nomeDoArquivo, JSON.stringify(newArray))
 
// }

// write()

// async function write() {
//   const simpsons = await fs.readFile(nomeDoArquivo, 'utf8')
//   .then((data) => JSON.parse(data))

//   const newArray = simpsons.filter(s => s.id == 1 || s.id == 2 || s.id == 3 || s.id == 4)
  
//   await fs.writeFile('./simpsonsFamily.json', JSON.stringify(newArray))
 
// }

// write()

// async function write() {
//   const simpsons = await fs.readFile('simpsonsFamily.json', 'utf8')
//   .then((data) => JSON.parse(data))

//   simpsons.push({"id":"8","name":"Nelson Muntz"})
  
//   await fs.writeFile('simpsonsFamily.json', JSON.stringify(simpsons))
 
// }

// write()

async function write() {
  const simpsons = await fs.readFile('simpsonsFamily.json', 'utf8')
  .then((data) => JSON.parse(data))

  simpsons.splice(simpsons.length - 1)
  simpsons.push({"id":"5","name":"Maggie Simpson"})
  
  await fs.writeFile('simpsonsFamily.json', JSON.stringify(simpsons))
 
}

write()