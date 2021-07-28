let angA = 0;
let angB = 120;
let angC = 60;
let soma = angA + angB + angC;


if(soma == 180 && angA > 0  && angB > 0  && angC > 0){
    console.log(true);
}
else if(soma != 180 && angA > 0  && angB > 0  && angC > 0){
    console.log(false);
}
else {
    console.log('Erro: algum ângulo é inválido');
}