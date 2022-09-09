function mediaAluno(nota1, nota2){
    let media = (nota1 + nota2)/2

    if (media >= 7){
        console.log("Aluno aprovado com a média "+media);
    } else if (media < 7) {
        console.log("Aluno reprovado com média "+media);
    }

}

function aluno(nome, curso){

    let messagem = "Seja bem vindo " + nome + " ao curso de " +curso
    console.log(messagem);

}