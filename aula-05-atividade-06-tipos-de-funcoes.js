//Função sem retorno e sem parâmetro

function cumprimentar() {
    console.log('oi gente!');
}

cumprimentar();

//Função sem retorno, com parâmetro

function cumprimentar() {
    console.log('oi gente!');
}

cumprimentar();

//Uso de função com retorno em string

function cumprimentar() {
    return 'Oi gente!'
}

function cumprimentaPessoa(nomePessoa) {
    console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
}

cumprimentaPessoa('Paula') // “Oi gente! Meu nome é Paula”

//Função com return e mais de um parâmetro

function operacaoMatematica(numero1, numero2, numero3) {
    return numero1 + numero2 + numero3
}

operacaoMatematica(15, 30, 45) // 90