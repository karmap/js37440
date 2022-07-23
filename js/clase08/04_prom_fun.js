console.log('-> Promises');

const procesoRandom = ( umbral ) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            const rand = Math.random()
            if ( rand > umbral ) {
                resolve(rand)
            } else {
                reject(rand)
            }
        }, 1000 )
    })
}

procesoRandom( 0.5 )
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