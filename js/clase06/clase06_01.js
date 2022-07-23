console.log('Ejemplo de Local Storage');

let numbers = [4,5,7,8,9]

localStorage.setItem('numbers', numbers)

let numbersBack = localStorage.getItem('numbers')

console.log(typeof numbersBack);
console.log( numbersBack.split(',').map( n => Number(n) ) )