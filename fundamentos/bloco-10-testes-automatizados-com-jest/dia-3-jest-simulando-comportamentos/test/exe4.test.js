// Dentro de um mesmo arquivo, crie três funções. A primeira deve receber uma string e retorná-la em caixa alta. A segunda deve também receber uma string e retornar só a primeira letra. A terceira deve receber duas strings e concatená-las. Faça o mock do arquivo. Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa. Para a segunda função, uma nova implementação deve retornar a última letra de uma string. A terceira deve receber três strings e concatená-las.

const exe4 = require('../scr/exe4');

test('testando exe4', () => {
  exe4.caixaAlta = jest.fn().mockImplementation((str) => str.toLowerCase());

  expect(exe4.caixaAlta('DoG')).toEqual('dog');
  expect(exe4.caixaAlta).toHaveBeenCalled();
  expect(exe4.caixaAlta).toHaveBeenCalledTimes(1);

  exe4.primeiraLetra = jest.fn().mockImplementation((str) => str.substr(-1, 1));

  expect(exe4.primeiraLetra('dog')).toEqual('g');
  expect(exe4.primeiraLetra).toHaveBeenCalled();
  expect(exe4.primeiraLetra).toHaveBeenCalledTimes(1);

  exe4.concatenaStrings = jest.fn().mockImplementation((a, b, c) => `${a}${b}${c}`);

  expect(exe4.concatenaStrings('d', 'o', 'g')).toEqual('dog');
  expect(exe4.concatenaStrings).toHaveBeenCalled();
  expect(exe4.concatenaStrings).toHaveBeenCalledTimes(1);
});