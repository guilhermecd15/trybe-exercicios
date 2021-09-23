// Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez. Faça os testes necessários.

let randomNumber = require('../scr/exe1');

test('testando randomNumber', () => {
  randomNumber = jest.fn().mockImplementation((a, b) => a / b);

  expect(randomNumber(100, 10)).toBe(10);
  expect(randomNumber).toHaveBeenCalled();
  expect(randomNumber).toHaveBeenCalledTimes(1);
});