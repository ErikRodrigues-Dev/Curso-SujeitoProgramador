function pedir(){
   let valor = prompt("digite um valor de 1 a 4")

   switch (Number(valor)){
        case 1:
            alert('Você escolheu Suco')
            break;
        case 2:
            alert('Você escolheu Agua')
            break;
        case 3:
            alert('Você escolheu guarana')
            break;
        case  4:
            alert('Chamar o garçom!')
            break;
            default:
                alert('Escolha uma opção de 1 a 4')
            break;         


   }
}