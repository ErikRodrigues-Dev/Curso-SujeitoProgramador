//Funcoes anonimas

// () => {}

// 1- Os parentenses, que e por onde a função recebe os argumentos(assim como na funcoes tradcionais)
// 2 Seta => responsavel pelo nome Arrow
// 3 e as chaves: o bloco do codigo que representa o corpo da funcao

function somar (x,y){
    let total = x+y;
    return console.log(total);
}

somar(10, 30);


let subtrair = (a, b) => {
    let total = a - b;
    console.log(total)
}

subtrair(56,9);


let numeros = [1,3,5,10];
numeros.map((item) =>{
    console.log(item)
})