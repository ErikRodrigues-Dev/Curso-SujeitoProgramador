function convidados(...nomes){
    console.log("Seja bem vindo todos convidados")
    console.log(nomes);
}

convidados("Erik", "Drielly", "Antonio","Clea", "CECILIA", "ROBEVALDO");


function geradorNum(...numeros){
    console.log(numeros)

    const numeroGerado = Math.floor(Math.random() * numeros.length)
    console.log(numeroGerado);
}


geradorNum(1,2,4,5,6,4,89,54,0,1,8,98,6544,654,987,564,654,678,9,948,9749,981549,3693694)