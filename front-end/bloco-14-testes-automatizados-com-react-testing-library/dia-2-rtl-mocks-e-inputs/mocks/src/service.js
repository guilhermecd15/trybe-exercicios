const retornaNumeroAleatorio = () => Math.floor(Math.random() * 100);

function caixaAlta(str) {
  return str.toUpperCase();
}

function primeiraLetra(str) {
  return str.substr(0, 1);
}

function concatenaStrings(str1, str2) {
  return `${str1}${str2}`
}

const API_URL = 'https://dog.ceo/api/breeds/image/random';

const fetchJoke = () => {
  return fetch(API_URL, { headers: { Accept: 'application/json' }})
    .then(response => response.json())
    .then(data => data.joke);
};

module.exports = { 
  retornaNumeroAleatorio,
  caixaAlta,
  primeiraLetra,
  concatenaStrings,
  API_URL,
  fetchJoke,
  };

