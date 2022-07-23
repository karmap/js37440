console.log('Desestructurando arrays');

const productos = [
    {id: 1, name: 'prod1'},
    {id: 2, name: 'prod2'},
    {id: 3, name: 'prod3'},
]

console.log(productos);

// console.log(...productos);

const [ , , x ] = productos

console.log( x );

const prodY = {
    ...x,
    // name: 'Prod Y',
    stock: 10
}

console.log(prodY);

// console.log(...productos.map( p => p.name ))


const saludar = (...nombres) => {
    console.log(nombres);

    nombres.forEach( (nombre) => {
        console.log('Hola ' + nombre);
    } )
}

saludar( 'Juan' ) 

saludar( 'Ana', 'Martin', 'Lucas')

saludar()
