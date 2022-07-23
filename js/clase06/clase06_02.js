console.log('Local Storage con JSON');

let items = [
    {id: 1, name: 'iPhone', price: 1200},
    {id: 2, name: 'Samsung', price: 1000},
    {id: 3, name: 'Xiaomi', price: 400}
]

console.log(items);

let itemsJSON = JSON.stringify(items)

localStorage.setItem('items', itemsJSON)

let itemsFromStorage = localStorage.getItem('items')
console.log(typeof itemsFromStorage);
console.log(itemsFromStorage);

let itemsBack = JSON.parse( itemsFromStorage )
console.log(itemsBack);