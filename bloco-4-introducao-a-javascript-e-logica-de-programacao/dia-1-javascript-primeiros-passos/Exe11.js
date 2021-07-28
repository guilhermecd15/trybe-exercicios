let salbru = 3000;
let aliq;
let aliqIR;

if (salbru <= 1556.94){
    aliq = salbru * 0.08;
}
else if (salbru <= 2594.92){
    aliq = salbru * 0.09;
}
else if (salbru <= 5189.82){
    aliq = salbru * 0.11;
}
else{
    aliq = 570.88;
}

let salbas = salbru - aliq;

if (salbas <= 1903.98){
    aliqIR = 0;
}
else if (salbas <= 2826.65){
    aliqIR = (salbas * 0.075) - 142.8;
}
else if (salbas <= 3751.05){
    aliqIR = (salbas * 0.15) - 354.8;
}
else if (salbas <= 4664.68){
    aliqIR = (salbas * 0.225) - 636.13;
}
else{
    aliqIR = (salbas * 0.275) - 869.36;
}

console.log("salário líquido: R$ " + (salbas -aliqIR));
