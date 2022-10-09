//funciones en JS

// no crear funciones de esta manera 
// function saludar( nombre ){
//     return `Hola, ${ nombre }`;
// }

// de esta manera es mas correcta

const saludar = function saludar(nombre){
    return `Hola, ${ nombre }`;
}

//funcion de flecha
const saludar2 = (nombre) =>{
    return `Hola, ${ nombre }`;
}

// funcion de flecha simplificado
const saludar3 = (nombre) => `Hola, ${ nombre }`;

const getUser = () =>({
    uid:'ABC123',
    username:'Er1cK'
})

console.log(saludar3('Vegeta'));

const user = getUser();
console.log(user);

//Tarea
// 1. transformar a una funcion de flecha
// 2. tiene que retornar un objeto implicito (sacar la palabra return)
// 3. probarlo
const getUsuarioActivo = (nombre) => ({
        uid:'ABC31',
        username: nombre
    })

const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);