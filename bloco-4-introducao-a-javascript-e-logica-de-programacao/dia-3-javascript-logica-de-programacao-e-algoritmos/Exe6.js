let num = 12;
let div = 1.

for(i = 2; i <= num/2; i += 1){
    if(num % i === 0){
        div += 1;
    }
}

if(div === 1){
    console.log("O número é primo!");
}
else{
    console.log("O número não é primo! ele possuí: " + (div + 1) + " divisores!");
}