/**
 * Challenge 01 - APLANANDO ARRAYS
 * 
 * Se han implementado 3 posibles modos de hacerlo
 * 
 */

const sample = [1, [2, 3], [[4], [5, 6, [7, 8, [9]]]]];
const result=[];

const aplana = function(arr){
    //1.- Esto sería directo, a través de un método del prototipo de Array
    //return arr.flat(Infinity); 

    //2.- Usando un bucle clásico
    for (elem in arr) {
        if(arr[elem].length){  //Se podría también haber usado if(Array.isArray(arr[elem]))
            aplana (arr[elem]);
        } else {
            result.push(arr[elem]);
        }
    }
    return result;

    //3.-Haciéndolo con reduce
    //return arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? aplana(val) : val), []);
}

console.log(aplana(sample));





