console.log('Desestructurando objetos');

// const miPersonaje = {
//     clase: 'pirata',
//     name: 'Boris',
//     atributos: {
//         vida: 100,
//         fuerza: 100,
//         mana: 100,
//         nivel: 5
//     }
// }

const miPersonaje = null

console.log( miPersonaje );

// const verAtributos = ( personaje ) => {
//     console.log(`Atributos de ${personaje.name}`);
//     console.log('Vida restante: ' + personaje.atributos.vida);
//     console.log('Fuerza restante: ' + personaje.atributos.fuerza);
// }

// const verAtributos = ( personaje ) => {
//     const { name, atributos: {vida, fuerza} } = personaje
//     console.log(`Atributos de ${ name }`);
//     console.log('Vida restante: ' + vida);
//     console.log('Fuerza restante: ' + fuerza);
// }

const verAtributos = ( { name, atributos: {vida, fuerza, nivel} } ) => {
    console.log(`Atributos de ${ name }`);
    console.log('Vida restante: ' + vida);
    console.log('Fuerza restante: ' + fuerza);
    console.log('Nivel: ' + nivel);
}

// miPersonaje && verAtributos( miPersonaje )

miPersonaje ? verAtributos( miPersonaje ) : console.log('No hay personaje');