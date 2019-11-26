/**
 * Challenge 05 - MEMOIZATION
 * 
 */


console.log("======================== APARTADO A+B ==================================");

const expensiveFunction:Function = ():number => {
    console.log("Una única llamada");
    return 3.1415;
}

const memoize:Function = (funcion:Function) => {let c:number; return ():number => {if (!c) c = funcion(); return c;}}

const memoized:Function = memoize(expensiveFunction);

console.log(memoized());
console.log(memoized());
console.log(memoized());
console.log(memoized());

console.log("======================== APARTADO C ==================================");

let count:number = 0; // Comprobacion de no de ejecuciones
const repeatText:Function = (repetitions: number, text: string): string =>
    (count++, `${text} `.repeat(repetitions).trim())

const memoize2:Function = (funcion:Function):Function => {
    let map = new Map();
    return (num:number, txt:string):string => {
        const key:string=num+txt;
        if (!map.size || !map.get(key)) {
            // console.log(`primer ${key}`);
            map.set(key, funcion(num, txt));
        }
        return map.get(key);
    }    
};
const memoizedGreet:Function = memoize2(repeatText);
console.log(memoizedGreet(1,"pam"));
console.log(memoizedGreet(3,"chun"));
console.log(memoizedGreet(1,"pam"));
console.log(memoizedGreet(3,"chun"));
console.log(count);



