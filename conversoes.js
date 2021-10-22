// tipo de dado
//boleannos

//conversão implicita
const numero = 456;
//const numeroString = "456";
const numeroString = Number("456");
// const numeroString = Number("456a"); // Gera NaN

/*
console.log(numero === numeroString); // realiza a comparação sem converter os tipos, apenas verifica a igualdade
console.log(numero == numeroString); // realiza a conversão dos tipos compativeis antes de comparar. Pode gerar bugs
console.log(numero + numeroString); // realiza a conversão dos tipos para String e realiza cocatenação entre as variaveis
*/

//Number()
//String()
//console.log(numero + Number(numeroString));

console.log(numero + numeroString);

//conversão explicita