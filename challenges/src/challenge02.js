/**
 * Challenge 02 - ACCESO EN PROFUNDIDAD
 * 
 */

//====================  APARTADO A ==========================


const myObject = {a: 1, b: {c: null, d: {e: 3, f: {g: "bingo",}}}};

const deepGet = function (obj={}, ...prop) {
    if(!prop.length) return obj;
    if(obj[prop[0]] && prop.length>1){
        if(Object.keys(obj[prop[0]]).length) {
            return deepGet(obj[prop[0]], ...(prop.slice(1)));
        } else {
            return undefined;
        }
    } else {
        return obj[prop[0]];
    }
}

const myObject2 = {};
const deepSet = function (value, obj, ...prop) {
    if(!prop.length) return;
    if(prop.length>1){
        if(!obj[prop[0]]) obj[prop[0]]={};
        deepSet(value, obj[prop[0]], ...(prop.slice(1)));
    } else {
        obj[prop[0]]=value;
    }
}

// console.log("====================  APARTADO A ==========================");
console.log(deepGet(myObject, "x")); // undefined
console.log(deepGet(myObject, "a")); // 1
console.log(deepGet(myObject, "b")); // { c: null, d: {....}}
console.log(deepGet(myObject, "b", "c")); // null
console.log(deepGet(myObject, "b", "d", "f", "g")); // bingo
console.log(deepGet(myObject)); // {a: 1, b: {...}}

console.log("====================  APARTADO B ==========================");
deepSet(1, myObject2, "a", "b");
console.log(JSON.stringify(myObject2)); // {a: { b: 1}}
deepSet(2, myObject2, "a", "c");
console.log(JSON.stringify(myObject2)); // {a: { b: 1, c: 2}}
deepSet(3, myObject2, "a");
console.log(JSON.stringify(myObject2)); // {a: 3}
deepSet(4, myObject2);
console.log(JSON.stringify(myObject2)); // Do nothing // {a: 3}
deepSet(4, myObject2, "d", "g", "z");
console.log(JSON.stringify(myObject2)); // Do nothing // {a: 3, d: {g: {z: 4}}}