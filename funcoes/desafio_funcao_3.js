const nota1 = 7.8;
const nota2 = 3.1;
const nota3 = 6.7;

//calcular a media do aluno usando as duas maiores notas 
// mostrar o status 
// aprovado >= 7
// recuperacoa >= 4 < 7
// reprovado < 4 

function minimo(n1, n2) {
    return n1 <= n2 ? n1 : n2;
}


function media(n1, n2, n3) {
    const menorNota = minimo(n1, minimo(n2, n3));

    if(menorNota === n1) {
        return (n2 + n3) / 2;
    } else if(menorNota === n2) {
        return (n1 + n3) / 2;
    } else {
        return (n1 + n2) / 2;
    }
    
}

function mediaParaStatus(media) {
    if(media >= 7) {
        return 'Aprovado';
    }else if (media >= 4) {
        return 'Recuperacao';
    }else {
        return 'Reprovado';
    }
}

const mediaFinal = media(nota1, nota2, nota3);
const statusFinal = mediaParaStatus(mediaFinal);
console.log(`O resultado do aluno é ${statusFinal}!`);