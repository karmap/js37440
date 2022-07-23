console.log('Fetch a JSON local');

const URL = 'js/after01/data/products.json'

function renderProducts( productos ) {
    productos.forEach( producto => {
        document.write(`<li>${producto.name} - precio: ${producto.price}</li>`)
    });
}

fetch( URL )
    .then( res => res.json() )
    .then( data => { renderProducts( data ) })
    .catch( err => { console.log('Hubo un error: '); } )
    .finally( () => { console.log('Terminó el fetch') } )