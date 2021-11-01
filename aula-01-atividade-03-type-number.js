// Tipo Number

const meuNumero = 3;
console.log(typeof(meuNumero));

const primeiroNumero = 1;

const segundoNumero = 2;

const operacaoMatematica = primeiroNumero * segundoNumero;

console.log(operacaoMatematica);

// ponto flutuante

const numeroPontoFlutuante = 3.3;

const pontoFlutuanteSemZero = .3;

const novaOperacaoMatematica = primeiroNumero / numeroPontoFlutuante;

console.log(novaOperacaoMatematica);

//NaN - > Not a Number (Não é um número)

const alura = "Alura";

console.log(alura + primeiroNumero); //É possível realizar a Cocatenação de String com Número

console.log(alura * primeiroNumero); //Não é possivel multiplicar uma String com um Número

const idade = 28
const pi = 3.14

var a = 10
var b = 0
console.log(a/b) // Infinity

var a = 0
var b = 0
console.log(a/b) // NaN