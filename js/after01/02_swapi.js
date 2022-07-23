console.log('Star Wars API');

const URL = 'https://swapi.dev/api/people/'

function render( personajes ) {
    personajes.forEach( personaje => {
        document.write(`<li>${personaje.name}</li>`)
    });
}

// fetch( URL )
//     .then( res => res.json() )
//     .then( data => {
//         console.log( data )
//         render( data.results )
//     })

// const getData = async () => {
//     const res = await fetch(URL)
//     const data = await res.json()
//     console.log( data )
//     render( data.results )
// }

// getData()

(async () => {
    const res = await fetch(URL)
    const data = await res.json()
    console.log( data )
    render( data.results )
})()