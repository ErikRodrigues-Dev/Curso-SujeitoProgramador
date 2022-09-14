//Find = buscar algo
let listagem = [ 5, 3, "Jose", 2, "Erik"]

let busca = listagem.find((item) =>{
    return item === "Erik"
})

console.log(busca);

// Filter = filtar por condição

let palavras = ["Erik", "OLA", "Qual a tua", "Roubar", "quadrado"]

let = resultado = palavras.filter ((item) => {
    return item.length >= 5 ;
})

console.log(resultado)