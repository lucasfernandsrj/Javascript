/*
Math.round(): Faz o arredondamento (round em inglês) 
de um número de ponto flutuante para o INTEIRO MAIS PRÓXIMO.
*/

const valor1 = Math.round(4.3); // retona 4
const valor2 = Math.round(2.5); // retona 3, quando o número termina com 0.5 a função arredonda para cima.
const valor3 = Math.round(7.85); // retona 8

console.log(valor1);
console.log(valor2);
console.log(valor3);

/*
Math.ceil(): Faz o arredondamento para o valor mais alto, 
também conhecido como teto (ceil em inglês).
*/

let valor4 = Math.ceil(5.1); //retorna 6
let valor5 = Math.ceil(2.8); //retorna 3

/*
Math.trunc() : Desconsidera os números decimais, 
o que é conhecido como truncamento.
*/

const valor6 = Math.trunc(4.2); //retorna 4
const valor7 = Math.trunc(4.8); //retorna 4

/*
Math.pow() : Faz a exponenciação de 2 números. 
Quando for simples, como ao quadrado(2) ou cubo(3), 
recomenda-se usar a multiplicação por ser mais rápido.
*/

const eleva1 = Math.pow(4, 2); //retorna 4^2 = 16
const eleva2 = Math.pow(2.5, 1.5); //retorna 2.5^(3/2) = 3.9528 ...

console.log(eleva1)
console.log(eleva2)

/*
Math.sqrt() : Retorna a raiz quadrada de um número.
*/

const raiz1 = Math.sqrt(25); //retorna 5
const raiz2 = Math.sqrt(36); //retorna 6

console.log(raiz1)
console.log(raiz2)

/*
Math.min(): Retorna o menor valor entre os argumentos.
*/

const min1 = Math.min(0, 150, 30, 20, -8) //retorna -8

console.log(min1)

/*
Math.random(): Retorna um valor randômico (random em inglês) entre 0 e 1, 
então não teremos um valor esperado para receber.
*/

const aleatorio1 = Math.random()

console.log(aleatorio1)


//Este exemplo retorna a parte inteira de um número entre dois valores predefinidos, 2 e 9.

const maximo = Math.sqrt(81);
const minimo = Math.ceil(1.24);
const aleatorio2 = Math.trunc(Math.random() * (maximo - minimo) + minimo);

console.log(aleatorio2)