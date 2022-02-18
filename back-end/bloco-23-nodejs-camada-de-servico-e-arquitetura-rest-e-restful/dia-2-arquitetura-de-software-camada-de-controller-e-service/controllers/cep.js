const Cep = require('../services/cep');
const Joi = require('joi');

const ping = async (req, res) => res.status(200).json({ "message": "pong!" });

const findByCep = async (req, res, next) => {
  const { cep } = req.params;

  const endereco = await Cep.findByCep(cep);

  if (Cep.error) return next(Cep.error);

  return res.status(200).json(endereco);
};

const createCep = async (req, res, next) => {
  const { cep, logradouro, bairro, localidade, uf } = req.body;

  const { error } = Joi.object({
    // Deve ser uma string (.string()) não vazia (.not().empty()) e é obrigatório (.required())
    cep: Joi.string().not().empty().required(),
    logradouro: Joi.string().not().empty().required(),
    bairro: Joi.string().not().empty().required(),
    localidade: Joi.string().not().empty().required(),
    uf: Joi.string().not().empty().required(),
  })
    // Por fim, pedimos que o Joi verifique se o corpo da requisição se adequa a essas regras
    .validate({ cep, logradouro, bairro, localidade, uf });

  // Caso exista algum problema com a validação, iniciamos o fluxo de erro e interrompemos o middleware.
  if (error) {
    return next(error);
  }

  // Caso não haja erro de validação, prosseguimos com a criação do usuário
  const newEndereco = await Cep.createCep(cep, logradouro, bairro, localidade, uf);

  // Caso haja erro na criação da pessoa autora, iniciamos o fluxo de erro
  if (newEndereco.error) return next(newEndereco.error);

  // Caso esteja tudo certo, retornamos o status 201 Created, junto com as informações
  // da nova pessoa autora
  return res.status(201).json(newEndereco);
};

module.exports = {
  ping,
  findByCep,
  createCep,
};