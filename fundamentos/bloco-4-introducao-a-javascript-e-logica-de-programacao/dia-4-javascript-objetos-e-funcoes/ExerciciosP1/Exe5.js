let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
};

let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
};

for (let i in info && info2) {
  if (i === 'recorrente' && info[i] === 'Sim' && info2[i] === 'Sim') {
    console.log('Ambos recorrentes');
  }
  else {
    console.log(info[i] + " e " + info2[i])
  }
}
