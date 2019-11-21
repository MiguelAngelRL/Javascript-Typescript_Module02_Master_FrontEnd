/**
 * Exercise 03 - CLONE & MERGE
 */

//=============== CLONE =============================

const objOriginal = {
    nombre: "Miguel",
    ciudad: "Torremolinos",
    cod: 29620,
    pais: "España"
}

function clone (source) {
    return {...source};
}

const objClonado = clone(objOriginal);

console.log(objOriginal);
console.log(objClonado);
console.log(objOriginal===objClonado?"No es un clon, misma referencia":"¡¡Es un clon!!");

//=============== MERGE =============================

const a = {name: "Maria", surname: "Ibañez", country: "SPA"};
const b = {name: "Luisa", age: 31, married: true};

function merge (source, target) {
    return {...target, ...source};
}

const objMerged = merge(a, b);

console.log(objMerged);
