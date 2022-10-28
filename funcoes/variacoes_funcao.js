//#1: Função COM Paremetros e COM Retorno 

function somar (a, b) {
    return a + b;
}

let resultado = somar(30, 56);
console.log(resultado);
console.log(somar(30,56));

//#2: Função COM Paremetros e SEM Retorno
function exibirMutiplicacao(a, b) {
    console.log(a * b);
}

exibirMutiplicacao(10, 21);
exibirMutiplicacao(7, 9);

//#3: Função SEM Paremetros e COM Retorno
function retornarDataAtual() {
    return new Date();
}

console.log(retornarDataAtual());

//#3: Função SEM Paremetros e SEM Retorno
function exibirHoraAtual() {
    console.log(new Date().getHours());
}

exibirHoraAtual();