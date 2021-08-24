let n = 7;
let linha = " ";
let c = (n + 1) / 2;
let espacoesq = c;
let espacodir = c;

for ( let il = 1; il <= n; il += 2){
    linha = " ";
    for (let ic = 1; ic <= n ; ic += 1){
        if(ic === espacoesq || ic === espacodir || il === n){
            linha += "*";
        }
        else{
            linha += " ";
        }
    }
    console.log(linha);
    espacoesq -= 1;
    espacodir += 1;
}
