const sum = require('../Exe/exe1');

describe('A função sum(a, b) retorna a soma do parâmetro a com o b', () => {
  it('Teste se o retorno de sum(4, 5) é 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
  it('Teste se o retorno de sum(0, 0) é 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
  it('Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")', () => {
    expect(() => { sum(4, "5") }).toThrowError(new Error('parameters must be numbers'));
  });
});
