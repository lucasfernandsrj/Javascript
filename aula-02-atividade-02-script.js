
/*
//var = não recomendada por possuir poucas restrições de uso
//let = permite realizar trocas de valores durante a execução e deve ser declarada inicialmente
//const = não permite realizar trocas de valores declarado e deve ser declarada inicialmente

var altura = 5;
var comprimento = 7;

area = altura * comprimento;
console.log(area);
var area; 

//pode ser declarado apos o uso, mas não corresponde as boas praticas do javascript. 

*/

/*
let forma = "retangulo";
let altura = 5;
let comprimento = 7;
//let area = altura * comprimento;
let area;

if(forma === "retangulo"){
    area = altura * comprimento; //Área do retangulo = base do retângulo * altura do retângulo
}else{
    area = (altura * comprimento) / 2;
}

console.log(area);

*/

const forma = "triangulo";
const altura = 5;
const comprimento = 7;
//const area = altura * comprimento;
//const area; //SyntaxError: Missing initializer in const declaration
let area;

if(forma === "quadrado"){
    area = altura * comprimento; //Área do quadrado = lado do quadrado * lado do quadrado
}else{
    area = (altura * comprimento) / 2;  //Área do triangulo = (base do triangulo * altura do triangulo) / 2
}

console.log(area);
