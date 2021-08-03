function verificaFimPalavra(word, ending){
    word = word.split("");
    ending = ending.split("");
    let newword = '';
    for(i = 0; i < ending.length; i += 1){
        if(word[word.length - ending.length + i] === ending[i]){
            newword += ending[i]
        }
    }
    ending = ending.join('');
    if(newword === ending){
        return true;
    }
    else{
        return false;
    }
}

console.log(verificaFimPalavra('trybe', 'be'));
console.log(verificaFimPalavra('joaofernando', 'fernan'));
