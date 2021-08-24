function verificaPalindrome(name){
    palim = name.split("").reverse().join("");    
    if(name === palim){
        return true;
    }
    else{
        return false;
    }
}

console.log(verificaPalindrome('arara'));
console.log(verificaPalindrome('desenvolvimento'));
