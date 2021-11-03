const service = require('./service');

test("Crie uma função que gere um número aleatório", () => {
  service.retornaNumeroAleatorio = jest.fn().mockReturnValue(10);
  service.retornaNumeroAleatorio();
  service.retornaNumeroAleatorio();

  expect(service.retornaNumeroAleatorio).toHaveBeenCalled();
  expect(service.retornaNumeroAleatorio()).toBe(10);
  expect(service.retornaNumeroAleatorio).toHaveBeenCalledTimes(3);
});

test("crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo", () => {
  service.retornaNumeroAleatorio = jest.fn().mockImplementation((a,b) => a / b );

  expect(service.retornaNumeroAleatorio(4,2)).toBe(2);
  expect(service.retornaNumeroAleatorio).toHaveBeenCalledTimes(1);
});

test("Retorne a multiplicação dos parâmetros", () => {
  service.retornaNumeroAleatorio = jest.fn().mockImplementation((a,b,c) => a * b * c );

  expect(service.retornaNumeroAleatorio(1,2, 3)).toBe(6);
  expect(service.retornaNumeroAleatorio).toHaveBeenCalledTimes(1);

  service.retornaNumeroAleatorio.mockReset();

  service.retornaNumeroAleatorio = jest.fn().mockImplementation((a) => a * 2 );

  expect(service.retornaNumeroAleatorio(2)).toBe(4);
  expect(service.retornaNumeroAleatorio).toHaveBeenCalledTimes(1);
});

test("Desenvolva uma nova implementação para a primeira função: agora ela deve retornar a string em caixa baixa", () => {
  const upperCase = jest.spyOn(service, 'caixaAlta').mockImplementation((str) => str.toLowerCase() );
  
  expect(upperCase('DoG')).toEqual('dog');
  expect(upperCase).toHaveBeenCalled();
  expect(upperCase).toHaveBeenCalledTimes(1);

  upperCase.mockRestore();

  expect(service.caixaAlta('DoG')).toEqual('DOG');
});

test("Defina, para a segunda função, uma nova implementação: ela deve retornar a última letra de uma string", () => {
  service.primeiraLetra = jest.fn().mockImplementation((str) => str.substr(-1, 1));

  expect(service.primeiraLetra('dog')).toBe('g');
  expect(service.primeiraLetra).toHaveBeenCalled();
  expect(service.primeiraLetra).toHaveBeenCalledTimes(1);
});

test("Implemente, na terceira função: ela deve receber três strings e concatená-las", () => {
  service.concatenaStrings = jest.fn().mockImplementation((a, b, c) => `${a}${b}${c}`);

  expect(service.concatenaStrings('d', 'o', 'g')).toBe('dog');
  expect(service.concatenaStrings).toHaveBeenCalled();
  expect(service.concatenaStrings).toHaveBeenCalledTimes(1);
});

test("Crie uma função que faça requisição para a api dog pictures", async () => {
  const requestReturnSuccess = [
    {
      "message": "https://images.dog.ceo/breeds/pyrenees/n02111500_7655.jpg",
      "status": "success"
    }
  ]
  const requestReturnFailed = [
    {
      "message": "https://images.dog.ceo/breeds/pyrenees/n02111500_7655.jpg",
      "status": "failed"
    }
  ]
  service.fetchURL = jest.fn().mockResolvedValue(requestReturnSuccess);

  service.fetchURL();
  expect(service.fetchURL).toHaveBeenCalled();
  expect(service.fetchURL).toHaveBeenCalledTimes(1);
  await expect(service.fetchURL()).resolves.toBe(requestReturnSuccess);
  expect(service.fetchURL).toHaveBeenCalledTimes(2);

  service.fetchURL.mockRestore();

  service.fetchURL = jest.fn().mockResolvedValue(requestReturnFailed);

  service.fetchURL();
  expect(service.fetchURL).toHaveBeenCalled();
  expect(service.fetchURL).toHaveBeenCalledTimes(1);
  await expect(service.fetchURL()).resolves.toBe(requestReturnFailed);
  expect(service.fetchURL).toHaveBeenCalledTimes(2);
});

