const fs = require('fs').promises;

async function readWrite() {
  const allFiles = [];
  const arr = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!']
  const files =  arr.map((str, i) => {
    fs.writeFile(`./file${i + 1}.txt`, str)
    allFiles.push(`./file${i + 1}.txt`)
  });

  await Promise.all(files)

  const fileContent = await Promise.all(
    allFiles.map((elem) => fs.readFile(elem, 'utf-8'))
  )
  const newStr = fileContent.join(' ');

  await fs.writeFile('./fileAll.txt', newStr);
}

readWrite()