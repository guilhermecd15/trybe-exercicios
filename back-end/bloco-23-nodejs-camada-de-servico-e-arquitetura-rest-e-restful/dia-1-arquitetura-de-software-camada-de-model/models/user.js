const connection = require('./connection');

const isValid = (firstName, lastName, email, password) => {
  // console.log(firstName, lastName, email, password);
  if (!firstName) return false;
  if (!lastName) return false;
  if (!email) return false;
  if (!password || password.length < 6) return false;

  return true;
};

const create = async (firstName, lastName, email, password) => connection.execute(
  'INSERT INTO model_example.user (first_name, last_name, email, password) VALUES (?,?,?,?)',
  [firstName, lastName, email, password],
)

const getAll = async () => {
  const [user] = await connection.execute(
    'SELECT id, first_name, last_name, email, password FROM model_example.user;',
  );
  return user;
};

const getById = async (id) => {
  const [user] = await connection.execute(
    `SELECT id, first_name, last_name, email, password FROM model_example.user WHERE id = ${id};`,
  );
  return user;
};

const update = async (id, first_name, last_name, email, password) => {
  const user = await connection.execute(
    'UPDATE user SET first_name = ?, last_name = ?, email = ?, password = ? WHERE id = ?;', [first_name, last_name, email, password, id],
  );
  return getById(id);
};

module.exports = {
  isValid,
  create,
  getAll,
  getById,
  update,
};
