/**
 * Challenge 03 - TIPADO ARBOL
 * 
 */


interface Nodo<T> {
    valorNodo:T;
    nodoHijo?:Array<Nodo<T>>;
}

const arbol: Nodo<number> = {
    valorNodo:1,
    nodoHijo: [
                {valorNodo:2},
                {valorNodo:3, nodoHijo: [{valorNodo:4}]},
                {valorNodo:5}
              ]
}

//MIDDLE-MAN TECHNIQUE

interface nodoHijo2<T> extends Array<Nodo2<T>>{};

type Nodo2<T> = T|nodoHijo2<T>;

const arbol2:Nodo2<number> = [1,[2,3,[4],5]];
