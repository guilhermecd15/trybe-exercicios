function hydrate(str) {
  let sum = 0;
  let onlyNumbers = str.replace(/[^0-9]/g, '');
  for (let i in onlyNumbers) {
    for (let i2 = 1; i2 < 10; i2 += 1) {
      if (onlyNumbers[i] == i2) {
        sum += i2;
      }
    }
  }
  if (sum > 1) {
    return sum + ' copos de água';
  } return sum + ' copo de água';
}

module.exports = hydrate;