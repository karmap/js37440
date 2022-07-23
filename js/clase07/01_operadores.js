console.log('Operadores');

let user = {
    name: 'Juan',
    calificaciones: {
        matematicas: 10,
        fisica: 9
    }
}
// let user = null

const login = () => { console.log('haciendo login...') }
const saludar = nombre => { console.log(`Bienvenido ${nombre}`); }

// if (user) {
//     saludar( user.name )
// } else {
//     login()
// }

user ? saludar( user.name ) : login()

user && console.log('guardando estadísticas de uso');

// console.log( user.calificaciones.matematicas );
console.log( user?.calificaciones.matematicas );
// console.log( user.promedio?.() );