console.log('Fetch');

const URL = 'https://pokeapi.co/api/v2/pokemon/?limit=35'

const actualizaInterfaz = ( pokemons ) => {
    pokemons.forEach( (p, i) => {
        console.log(`${i+1} - ${p.name}`);
    });
}

fetch( URL )
    .then( res => res.json() )
    .then( data => {
        actualizaInterfaz( data.results );
    })