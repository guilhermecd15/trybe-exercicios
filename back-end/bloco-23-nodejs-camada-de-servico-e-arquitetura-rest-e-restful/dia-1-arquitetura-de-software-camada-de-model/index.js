const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

const user = require('./models/user')

app.post('/user', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if (!user.isValid(firstName, lastName, email, password)) {
    return res.status(400).json({
      "error": true,
      "message": "O campo 'password' deve ter pelo menos 6 caracteres"
    });
  }

  await user.create(firstName, lastName, email, password);

  res.status(201).json({ id: 1, firstName, lastName, email  });
});

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});