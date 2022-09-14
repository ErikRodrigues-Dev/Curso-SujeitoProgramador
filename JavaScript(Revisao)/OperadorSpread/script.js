let primeiros = [1, 2 ,3 ];
let numeros = [...primeiros, 4, 5, 10];

console.log(numeros);
console.log(primeiros.concat(numeros));

let pessoa = {
    nome: "Erik",
    idade: 27,
    cargo: "Analista de infraestrutura"
};

let novaPessoa = {
    ...pessoa,
    status: "Ativo",
    cidade: "Recife-PE",
    telefone: "(81)98521-6038"
};

console.log(novaPessoa);

function novoUsuario(info) {
   let dados = {
    ...info,
    status: "Ativo",
    nivel: "Jr",
    inicio: "20/02/2023",
    cod: "912085"
   };

   console.log(dados);
}

novoUsuario({
    nome: "Erik", sobrenome: "Rodrigues", cargo: "DEV"
});