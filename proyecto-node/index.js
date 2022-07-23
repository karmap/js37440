import axios from 'axios';

console.log('Hola mundo con node.js');

axios.get('https://swapi.dev/api/people/')
  .then( response => {
    response.data.results.forEach( e => {
        console.log(e.name);
    });
  })