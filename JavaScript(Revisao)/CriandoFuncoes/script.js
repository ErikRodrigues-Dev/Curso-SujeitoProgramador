let area = document.getElementById('area')

function entrar(){
    let nome = prompt("Informe seu nome");

    if (nome == '' || nome == null){
        alert('Ops, algo deu errado.')
        area.innerHTML = "Clique no botão para acessar..."
    } else {
        area.innerHTML = "Bem vindo "+ nome +" ";

        let botaoSair = document.createElement("button");
        botaoSair.innerText = "Sair da conta"
        botaoSair.onclick = sair;
        area.appendChild(botaoSair);
    }
}

function sair(){
    alert("Até Mais");
    area.innerHTML= "Você saiu!"
}