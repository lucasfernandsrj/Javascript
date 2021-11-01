const texto1 = "Olá, Mundo!";
const texto2 = 'Olá, Mundo!';
const senha = "senhaSuperSegura456!";
const StringDeNumero = "34567";

const citacao = 'O Lucas disse: "oi!"';
const citacao2 = "O Lucas disse: 'oi!'";

//console.log(citacao2);

// concatenacao

const citacao3 = "Meu nome é ";
const meuNome = "Lucas"
const concatenacao = citacao3 + meuNome;

//console.log(concatenacao);

//template string OU template literal


//usar unicode

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

/*console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)*/

// Comparação de Strings

const cidade = "belo horizonte";
const input = "Belo Horizonte";

console.log(cidade === input); // false - o JavaScript diferencia minúsculas e maiúsculas, tanto nos valores dos dados quanto no código que escrevemos.

//Manipulação de Strings por meio de metodos

const cidade2 = "belo horizonte";
const input2 = "Belo Horizonte";

const inputMinusculo = input2.toLowerCase(); // um dos métodos de string nativos do JavaScript

console.log(cidade2 === inputMinusculo); // true

//Propriedade que exibe o tamanho da String

const senha2 = "minhaSenha123";
console.log(senha2.length) // 13 caracteres

// A tentativa de atribuir um valor à propriedade .length de uma string não tem efeito observável.
let myString = "campainhas";

myString.length = 4;
console.log(myString);
// retorna  "campanhias"
console.log(myString.length);
// retorna 10