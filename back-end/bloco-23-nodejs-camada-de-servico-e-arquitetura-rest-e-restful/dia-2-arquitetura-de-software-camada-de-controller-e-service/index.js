// index.js

const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');

const Cep = require('./controllers/cep');
const errorMiddleware = require('./middlewares/error');

const app = express();

app.use(bodyParser.json());

app.get('/ping', Cep.ping);
app.get('/cep/:cep', rescue(Cep.findByCep));
app.post('/cep', rescue(Cep.createCep));

app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});