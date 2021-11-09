function apresentar(nome){
    return `Meu texto ${nome}`;
}

//Arrow function

const apresentarArrow = nome2 => `Meu texto ${nome2}`;


//Arrow function também não tem suporte à hoisting.

console.log(somaValores(1,1)) //ReferenceError: Cannot access 'somaValores' before initialization

const somaValores = (num1, num2) => num1 + num2;

//Arrow function extenso

const somaNumeros = (numero1, numero2) => {
    if (numero1 || numero2 > 10){
        return "Somente números entre 1 e 10";
    }else{
        return numero1 + numero2;
    }
}

console.log(somaValores(1,1))
console.log(somaNumeros(1,-1))
