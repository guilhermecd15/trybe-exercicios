// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const appendJokes = piada => {
  let p = document.querySelector('#jokeContainer');
  p.innerHTML = piada;
}

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => appendJokes(data.joke));
};

window.onload = () => fetchJoke();

const fetchPromise = () => {
  new Promise((resolve, reject) => {
    const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    const novaArr = arr.map((number) =>
      number * (Math.floor(Math.random() * 50) + 1)).map((n) => n * n);
    const sum = novaArr.reduce((acc, crr) => acc + crr);
    console.log(sum);
      (sum < 8000) ? resolve(sum) : reject();
  }).then((sum) => [2, 3, 5, 10].map((n) => sum / n))
    .then((arr) => arr.reduce((acc, crr) => acc + crr))
    .then((msg) => console.log(msg))
    .catch(() => console.log(`É mais de oito mil! Essa promise deve estar quebrada!"`));
};

fetchPromise();