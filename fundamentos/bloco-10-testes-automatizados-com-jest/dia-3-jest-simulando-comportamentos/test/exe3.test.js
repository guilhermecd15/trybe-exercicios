// Ainda com a mesma função do primeiro exercício, utilizando o mock, crie uma nova implementação que receba três parâmetros e retorne sua multiplicação. Após fazer os devidos testes para ela, resete sua implementação e crie uma nova, que receba um parâmetro e retorne seu dobro. Faça os testes necessários.

let randomNumber = require('../scr/exe1');

test('testando randomNumber', () => {
  randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);

  expect(randomNumber(1, 2, 5)).toBe(10);
  expect(randomNumber).toHaveBeenCalled();
  expect(randomNumber).toHaveBeenCalledTimes(1);

  randomNumber.mockReset();

  randomNumber = jest.fn().mockImplementation((a) => a * 2);
  
  expect(randomNumber(5)).toBe(10);
  expect(randomNumber).toHaveBeenCalled();
  expect(randomNumber).toHaveBeenCalledTimes(1);
});