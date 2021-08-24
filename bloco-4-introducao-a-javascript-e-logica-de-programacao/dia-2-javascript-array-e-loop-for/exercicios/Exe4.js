let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0

for(let index = 0; index < numbers.length; index++){
    sum += numbers[index] 
}

let med = sum / numbers.length

if(med > 20){
    console.log("Valor maior que 20")
}
else{
    console.log("Valor menor ou igual a 20")
}