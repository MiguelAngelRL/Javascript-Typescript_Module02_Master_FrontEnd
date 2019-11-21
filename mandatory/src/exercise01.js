/**
 * Exercise 01 - ARRAY OPERATIONS
 */


const arr = ["hola", "adios", 1, 2, "que tal?", 3];

//HEAD
const head = ([first]) => first;
console.log(`HEAD: ${head(arr)}`);

//TAIL
const tail = ([first,...resto]) => resto;
console.log(`TAIL: ${tail(arr)}`);

//INIT
const init = (arr) => arr.slice(0, arr.length-1);
console.log(`INIT: ${init(arr)}`);

//LAST
const last = (arr) => arr[arr.length-1];
console.log(`LAST: ${last(arr)}`);