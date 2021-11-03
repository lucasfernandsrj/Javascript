//parâmetros de função

function realizarSoma(valor1, valor2){
    return valor1 + valor2;
}

console.log(realizarSoma()); //Retorna NaN, pois o parametro não foi passado
console.log(realizarSoma(2, 2)); // Retorna 4
console.log(realizarSoma(-542, 72)); // Retorna 4

//Parâmetros x argumentos

function nomeIdade(nome, idade){
    return `Meu nome é ${nome} e estou com ${idade} anos.`
}

console.log(nomeIdade("Lucas", 28))
console.log(nomeIdade(28, "Lucas"))

function realizarMultiplicacao(valor1 = 1, valor2 = 1){
    return valor1 * valor2;
}

console.log(realizarMultiplicacao(realizarSoma(2,2), realizarSoma(3,2))) //retorna 20
//1- realizarSoma(2,2) retorna 4
//2- realizarSoma(3,2) retorna 5
//3- realizarMultiplicacao(4, 5) retorna 20

console.log(realizarMultiplicacao(realizarSoma(2,2))) // retorna a multiplicação de 4 por 1 (valor default)