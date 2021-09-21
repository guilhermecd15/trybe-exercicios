function encode(text) {
  let cod = '';
  cod = text.replace(/a/g, '1');
  cod = cod.replace(/e/g, '2');
  cod = cod.replace(/i/g, '3');
  cod = cod.replace(/o/g, '4');
  cod = cod.replace(/u/g, '5');
  return cod;
}

module.exports = encode;
