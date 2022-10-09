
/*
template string 

concatenar strings
para poner variables dentro de string 
backtick / back quote = ``
*/

const nombre = 'Erick';
const apellido = 'Caceres';

//const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${nombre} ${apellido} ${1 + 1}`;

console.log(nombreCompleto);

function getSaludo(nombre){
    return 'Hola '+ nombre;
}

console.log(`Esto es un texto: ${getSaludo(nombre)} `);