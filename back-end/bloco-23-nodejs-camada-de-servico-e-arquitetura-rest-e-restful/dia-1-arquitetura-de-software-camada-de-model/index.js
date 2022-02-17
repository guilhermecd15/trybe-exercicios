const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

const user = require('./models/user');

app.post('/user', async (req, res) => {
  const { first_name, last_name, email, password } = req.body;

  if (!user.isValid(first_name, last_name, email, password)) {
    return res.status(400).json({
      "error": true,
      "message": "O campo 'password' deve ter pelo menos 6 caracteres"
    });
  }

  await user.create(first_name, last_name, email, password);

  res.status(201).json({ first_name, last_name, email });
});

app.get('/user', async (req, res) => {
  const users = await user.getAll();

  res.status(200).json(users);
});

app.get('/user/:id', async (req, res) => {
  const { id } = req.params;
  const users = await user.getById(id);

  if (!users.length) {
    return res.status(404).json({
      "error": true,
      "message": "Usuário não encontrado"
    });
  }

  res.status(200).json(users);
});

app.put('/user/:id', async (req, res) => {
  const { id } = req.params;
  const { first_name, last_name, email, password } = req.body;

  if (!user.isValid(first_name, last_name, email, password)) {
    return res.status(400).json({
      "error": true,
      "message": "O campo 'password' deve ter pelo menos 6 caracteres"
    });
  }

  const users = await user.getById(id);

  if (!users.length) {
    return res.status(404).json({
      "error": true,
      "message": "Usuário não encontrado"
    });
  }

  const newUser = await user.update(id, first_name, last_name, email, password);

  res.status(200).json(newUser);
});

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});