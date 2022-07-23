console.log('Promises');

const promesa = new Promise( (resolver, rechazar) => {
    setTimeout( () => {
        resolver('OK')
    }, 3000 )
})

promesa.then( respuesta => {
    console.log('La promesa se resolvió');
    console.log(respuesta);
})

console.log('Terminó el proceso');