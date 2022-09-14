let pessoa = {
    nome: "Erik",
    sobrenome: "Rodrigues",
    empresa: "Sindifisco-PE",
    cargo: "Analista de infraestrutura"
};

//console.log(pessoa.nome);
//console.log(pessoa.cargo);

const {nome, cargo, empresa, sobrenome} = pessoa;

console.log(nome);
console.log(cargo);
console.log(sobrenome);
console.log(empresa);



let arraynome = ["Erik", "Lucas","Roberto"];
console.log(arraynome);
console.log(arraynome[2])

let {2:Roberto, 0:Erik} = arraynome;
console.log(Roberto);
console.log(Erik);

let [primeiroNome, segundoNome] = arraynome;
console.log(primeiroNome);
console.log(segundoNome);