const connection = require('./connection');

const findByCep = async (cep) => {
  const query =
    'SELECT cep, logradouro, bairro, localidade, uf FROM cep_lookup.ceps WHERE cep = ?';

  const [ceps] = await connection.execute(query, [cep]);

  if (ceps.length === 0) return null;

  return ceps;
};

const getNewCep = (cep, logradouro, bairro, localidade, uf) => {
  return {
    cep,
    logradouro,
    bairro,
    localidade,
    uf,
   };
};

const createCep = async (cep, logradouro, bairro, localidade, uf) => {
  const [ceps] = await connection.execute(
    'INSERT INTO cep_lookup.ceps (cep, logradouro, bairro, localidade, uf)  VALUES (?, ?, ?, ?, ?)',
    [cep, logradouro, bairro, localidade, uf]
  );
  return getNewCep(cep, logradouro, bairro, localidade, uf);
}

module.exports = {
  findByCep,
  createCep,
};