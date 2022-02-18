module.exports = (num) => {
  if (num > 0) {
    return 'positivo';
  }
  else if (num < 0) {
    return 'negativo';
  } 
  else if (num === 0) {
    return 'neutro';
  }
  else {
    return 'o valor deve ser um número';
  }
};
