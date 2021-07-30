let n = 5;
let linha = " ";
let espaco = n;

for ( let il = 1; il <= n; il += 1){ 
    for (let ic = 1; ic <= n ; ic += 1){
        if(ic < espaco){
            linha += " ";
        }
        else{
            linha += "*";
        }
    }
    console.log(linha);
    linha = " ";
    espaco -= 1;
}