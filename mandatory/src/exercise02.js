/**
 * Exercise 02 - CONCAT
 */


const a=["Esta", "es", "la", "concatenacion"], b=["de", "dos", "arrays"];
const concatenarDos = (a, b) => [...a, ...b];

console.log(`CONCAT: ${concatenarDos(a,b).join("")}`);

const c=["Y", "Esta", "es"], d=["la", "concatenacion"], e=["de", "mas"], f=["de", "dos", "arrays"];
const concatenarVarias = (...listas) => {
    let resultado = [];
    listas.forEach((lista) => resultado = concatenarDos(resultado, lista));
    return resultado;
}

console.log(`CONCAT MULTIPLE: ${concatenarVarias(c,d,e,f).join("")}`);