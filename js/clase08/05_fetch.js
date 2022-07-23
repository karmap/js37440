console.log('Fetch');

const URL = 'https://pokeapi.co/api/v2/pokemon/'

fetch( URL )
    .then( res => {
        return res.json()
    })
    .then( data => {
        console.log( data.results[3].name );
    })