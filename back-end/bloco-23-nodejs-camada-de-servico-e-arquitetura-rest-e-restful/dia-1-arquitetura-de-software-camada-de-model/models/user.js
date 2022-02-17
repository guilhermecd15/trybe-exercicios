const connection = require('./connection');

const isValid = (firstName, lastName, email, password) => {
  if (!firstName) return false;
  if (!lastName) return false;
  if (!email) return false;
  if (!password || password.length < 6) return false;

  return true;
};

const create = async (firstName, lastName, email, password) => connection.execute(
  'INSERT INTO model_example.user (firstName, lastName, email, password) VALUES (?,?,?,?)',
  [firstName, lastName, email, password],
)

module.exports = {
  isValid,
  create,
};