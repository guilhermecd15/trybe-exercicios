function decode(cod) {
  let dcod = '';
  dcod = cod.replace(/1/g, 'a');
  dcod = dcod.replace(/2/g, 'e');
  dcod = dcod.replace(/3/g, 'i');
  dcod = dcod.replace(/4/g, 'o');
  dcod = dcod.replace(/5/g, 'u');
  return dcod;
}

module.exports = decode;
