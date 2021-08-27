const longestWord = frase => {
  palavras = frase.split(' ');
  maiorPalavra = '';
  contLetras = 0;
  
  for (let i = 0; i < palavras.length; i += 1){
    if (palavras[i].length > contLetras) {
      contLetras = palavras[i].length;
      maiorPalavra = palavras[i];
    }
  }

  console.log(maiorPalavra);
}



longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu'

