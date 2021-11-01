// == compararação implicita

const numero = 5;

const texto = "5";

console.log(numero == texto) //true

console.log(numero === texto) //false

//typeof

console.log(typeof numero)
console.log(typeof texto)

// == realiza conversão dos tipos e compara o valor 
// === não realiza a conversão dos tipos, compara o valor e os tipos

/*
Boas práticas: utilizar apenas os 3 iguais para realizar comparações
e realizar a conversão explicita dos tipos

*/

// conversão explicita

Number()
String()