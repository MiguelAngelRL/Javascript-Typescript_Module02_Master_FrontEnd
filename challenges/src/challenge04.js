/**
 * Challenge 04 - TRAZAS POR CONSOLA
 * 
 */

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const showMessage = async ([time, message]) => {
    await delay(time);
    console.log(message);
};
const triggers = [
    async () => await showMessage([200, "third"]),
    async () => await showMessage([100, "second"])
];
const run = triggers => {
    //Código Enunciado
    // console.log("first");
    // triggers.forEach(t => t());

    //Código Nuevo
    triggers[0]().then (()=> {triggers[1]().then (() => {console.log("first");})});
};
run(triggers);