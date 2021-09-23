// Crie uma função que faça requisição para a api dog pictures . Mocke a requisição e crie dois testes. O primeiro deve interpretar que a requisição se resolveu e teve como valor "request sucess". O segundo deve interpretar que a requisição falhou e ter como valor "request failed". Crie todos os testes que achar necessário.

let fetchURL = require("../scr/exe6");

describe('testando a promise', () => {
  fetchURL = jest.fn();
  
  it("testando requisição caso a promise resolva", async () => {
    fetchURL.mockResolvedValue('request sucess');

    fetchURL();
    expect(fetchURL).toHaveBeenCalled();
    expect(fetchURL).toHaveBeenCalledTimes(1);
    await expect(fetchURL()).resolves.toBe('request sucess');
    expect(fetchURL).toHaveBeenCalledTimes(2);
  });

  it("testando requisição caso a promise seja rejeitada", async () => {
    fetchURL.mockReset();
    fetchURL.mockRejectedValue('request failed');

    expect(fetchURL).toHaveBeenCalledTimes(0);
    await expect(fetchURL()).rejects.toMatch('request failed');
    expect(fetchURL).toHaveBeenCalledTimes(1);
  });
});