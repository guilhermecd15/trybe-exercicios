// O código abaixo utiliza uma API de piadas e implementa o fetchJoke , que é um gerador de piadas ruins . As piadas são geradas aleatoriamente através do endpoint armazenado em API_URL . Faça um teste que verifique a chamada dessa API para um resultado específico. Para isso, faça um mock do fetch , que faz a chamada à API , utilizando os seguintes dados:

const bonus = require('../scr/bonus');

const requestReturn = [
  {
    'id': '7h3oGtrOfxc',
    'joke': 'Whiteboards ... are remarkable.',
    'status': 200
  }
];

test("testando requisição caso a promise resolva", async () => {
  bonus.fetchURL = jest.fn().mockResolvedValue(requestReturn);

  bonus.fetchURL();
  expect(bonus.fetchURL).toHaveBeenCalled();
  expect(bonus.fetchURL).toHaveBeenCalledTimes(1);
  await expect(bonus.fetchURL()).resolves.toBe(requestReturn);
  expect(bonus.fetchURL).toHaveBeenCalledTimes(2);
});
