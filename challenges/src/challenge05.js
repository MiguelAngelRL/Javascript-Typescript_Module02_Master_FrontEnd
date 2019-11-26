/**
 * Challenge 05 - MEMOIZATION
 * 
 */

const expensiveFunction = () => {
    console.log("Una única llamada");
    return 3.1415;
}

const memoize = (funcion) => {let cache; return () => { if (!cache) cache = funcion(); return cache;}}

const memoized = memoize(expensiveFunction);
console.log(memoized());
console.log(memoized());
console.log(memoized());
console.log(memoized());