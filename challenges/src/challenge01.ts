/**
 * Challenge 01 - APLANANDO ARRAYS con TYPESCRIPT
 * 
 */


const sample = [1, [2, 3], [[4], [5, 6, [7, 8, [9]]]]];
const result=[];

const aplana = function<Type>(arr:Array<Type>):Array<Type>{
    arr.forEach((elem) => {
        if(Array.isArray(elem)){
            aplana(elem);
        } else {
            result.push(elem);
        }
    });
    return result;
}

console.log(aplana(sample));