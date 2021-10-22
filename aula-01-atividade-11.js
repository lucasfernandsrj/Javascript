let input = null;

if (input === null) {
 console.log('não há informação');
} else {
 console.log(input);
}

let input3 = null; //null pode ser atribuído como valor de uma variável
let input2; //undefined se refere ao valor de uma variável que não foi inicializada

console.log(input3); // null
console.log(input2); // undefined 


//Importante: undefined também é o valor retornado por uma função que não tem cláusula return.

console.log(null == undefined); // true
console.log(null === undefined); // false