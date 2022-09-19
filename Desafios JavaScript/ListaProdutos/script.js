

let listaProdutos = ["Computador", " Telefone", " Mouse", " Teclado"];
 console.log("Lista Completa: "+listaProdutos);
listaProdutos.splice(2,1);
console.log("Lista de telefone com menos 1 item: " +listaProdutos);

let produtosFiltrados = listaProdutos.filter((itemProduto) =>{
    if (itemProduto == "Computador") {
        console.log("Produto em estoque: "+ itemProduto);
    } else if (itemProduto == "") {
        console.log("Produto em falta.");
    }
    
})
listaProdutos.splice(1,1);
console.log(listaProdutos)
