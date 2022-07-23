console.log('Inicia proceso');

setTimeout( () => {
    console.log('Mitad de proceso: 5 seg')
}, 5000)

setTimeout( () => {
    console.log('Mitad de proceso: 0 seg')
}, 0)

console.log('extra');

const randomTime = parseInt(Math.random() * 5000)
setTimeout( () => {
    console.log('Al azar: ' + randomTime)
}, randomTime)

console.log('Finaliza proceso');