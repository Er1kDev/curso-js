
// Desestructuracion
// asignacion desestructurante

const persona = {
    nombre: "Tony",
    edad: 45,
    clave: "Ironman",
};

//const {nombre} = persona;
//renombrar una variable
//const {nombre:nombre2} = persona;
// const {nombre,edad,clave} = persona;
// console.log(edad);

//funcion retornaPersona
// const retornaPersona = (usuario) =>{
//     console.log(usuario);
// }

//funcion retornaPersona de otra forma
// const retornaPersona = (usuario) =>{
    
//     const {nombre,edad,clave} = usuario;
//     console.log(edad,clave,nombre);

// }

const retornaPersona = ({clave,nombre,edad, rango = 'Capitan'}) =>{
    
   //console.log(nombre,edad,rango);
    return{
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat:21321,
            lng:21222222,
        }
    }
}
//para extraer objetos aninados y asigarlos a constantes donde esta el latlng
const {nombreClave,anios,latlng:{lat,lng}} = retornaPersona(persona);

console.log(nombreClave,anios);
console.log(lat,lng);

