const Cep = require('../models/cep');

const CEP_REGEX = /\d{5}-?\d{3}/;

const findByCep = async (cep) => {
  if (!CEP_REGEX.test(cep)) {
    return {
      error: {
        code: 'invalidData',
        message: 'CEP inválido',
      }
    }
  }

  // Solicitamos que o model realize a busca no banco
  const endereco = await Cep.findByCep(cep);

  // Caso nenhuma pessoa autora seja encontrada, retornamos um objeto de erro.
  if (!endereco) {
    return { "error": { "code": "notFound", "message": "CEP não encontrado" } }
  }

  // Caso haja uma pessoa autora com o ID informado, retornamos essa pessoa
  return endereco;
};

const createCep = async (cep, logradouro, bairro, localidade, uf) => {
  // Buscamos um autor com o mesmo nome completo que desejamos criar
  const existingCep = await Cep.findByCep(cep, logradouro, bairro, localidade, uf);

  // Caso essa pessoa autora já exista, retornamos um objeto de erro informando
  // que não é possível criar a pessoa autora pois ele já existe
  if (existingCep) {
    return {
      "error": { "code": "alreadyExists", "message": "CEP já existente" }
    }
  }
  // Caso a pessoa autora não exista e, portanto, possa ser criado
  // chamamos o model e retornamos o resultado
  return Cep.createCep(cep, logradouro, bairro, localidade, uf);
};

module.exports = {
  findByCep,
  createCep,
}