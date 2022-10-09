
//arreglo en JS

//const arreglo = new Array(); es muy raro que se use esto 
const arreglo = [1,2,3,4,5];
/* 
Esto tampoco es recomendable (el push)
porque modifica el objeto principal
arreglo.push(1)
arreglo.push(2)
arreglo.push(3)
arreglo.push(4)
arreglo.push(5) */

//se utiliza el operador spread para extraer informacion de un arreglo
let arreglo2 = [...arreglo, 6];

const arreglo3 = arreglo2.map( function(numero){
 return numero * 2
});


console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);