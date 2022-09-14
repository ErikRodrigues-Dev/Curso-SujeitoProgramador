let lista = ["Matheus", "Jose", "Maria", "Lucas", "INDEX"];

lista.map((item, index) =>{
    console.log(`Passando: ${item}` + ` e sua posição é ${index}`)
});

let number =[5, 3 , 2];
let total =  number.reduce((acumulador, numero, indice, original)=>{
    console.log(`${acumulador} - total ate o momento`);
    console.log(`${numero} - valor atual`);
    console.log(`${indice} - indice atual`);
    console.log(`${original} - array original`);

    return acumulador += numero ;

});

console.log(total);