// Utilizando as mesmas funções do exercício anterior, repita a implementação para a primeira função. Após repetir a implementação, restaure a implementação original e crie os testes necessários para validar.

const exe4 = require('../scr/exe4');

test('testando caixaAlta', () => {
  const upperCase = jest.spyOn(exe4, 'caixaAlta').mockImplementation((str) => str.toLowerCase());

  expect(upperCase('DoG')).toEqual('dog');
  expect(upperCase).toHaveBeenCalled();
  expect(upperCase).toHaveBeenCalledTimes(1);
  upperCase.mockRestore();
  expect(exe4.caixaAlta('DoG')).toEqual('DOG');
});