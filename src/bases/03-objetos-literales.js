
//objetos literales

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 3123123,
        lat: 12.322,
        lng: 32.2323
    }
};

console.log(persona);
/*
console.table(persona);
console.table({persona});
*/
// los tres puntos crea una copia del objeto persona
const persona2 = { ...persona};
persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2);