let numeros = [1,3,5,7,0,9];

numeros.sort()
console.log(numeros);

numeros.splice(0,1);
console.log(numeros);

numeros.sort((a, b)=> b-a);
console.log(numeros);