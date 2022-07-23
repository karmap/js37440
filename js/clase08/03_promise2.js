console.log('-> Promises');

const promesa = new Promise( (resolve, reject) => {
    setTimeout( () => {
        const rand = Math.random()
        if ( rand > 0.5 ) {
            resolve(rand)
        } else {
            reject(rand)
        }
    }, 1000 )
})

promesa
    .then( respuesta => {
        console.log('La promesa se resolvió');
        console.log(respuesta);
    })
    .catch( respuesta => {
        console.log('La promesa se rechazó');
        console.log(respuesta);
    })
    .finally( () => {
        console.log('La promesa terminó');
    })

console.log('-> Terminó el proceso');