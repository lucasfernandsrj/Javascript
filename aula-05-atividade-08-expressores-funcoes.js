function minhaFuncao(param){
    //bloco de codigo
}

//minhaFuncao("param")

//expressao de funcao

//const soma = function(num1, num2){return num1 + num2}

//console.log(soma(1,1))

//funções e var são listadas no topo do código, mecanismo conhecido como "HOISTING JavaScript" 

console.log(apresentar())
console.log(soma2(1,1)) //ReferenceError: Cannot access 'soma2' before initialization

function apresentar(){
    return "Olá";
}

const soma2 = function(num1, num2){return num1 + num2}