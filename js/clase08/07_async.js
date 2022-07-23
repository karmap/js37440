console.log('Fetch Async');

const URL1 = 'https://pokeapi.co/api/v2/pokemon/?limit=5'
const URL2 = 'https://pokeapi.co/api/v2/pokemon/?offset=5&limit=5'

const actualizaInterfaz = ( pokemons ) => {
    pokemons.forEach( (p, i) => {
        console.log(`${i+1} - ${p.name}`);
    });
}

const getData = async (URL) => {
    const response = await fetch( URL )
    const data = await response.json()
    actualizaInterfaz(data.results)
}

getData(URL1)
getData(URL2)
