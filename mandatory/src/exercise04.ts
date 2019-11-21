/**
 * Exercise 04 - READ BOOKS con TYPESCRIPT
 */

type libro = {
    title:string,
    isRead:boolean
};

const libros:libro[] = [
    {title: "Harry Potter y la piedra filosofal", isRead: true},
    {title: "Canción de hielo y fuego", isRead: false},
    {title: "Devastación", isRead: true},
    ];

function libroLeido(books:libro[], titleToSearch:string):boolean {
    //Solucion bucle clasico
    // for(let i:number=0; i<books.length; i++){
    //      if(books[i].title===titleToSearch) return books[i].isRead;
    // }
    // return false;

    //Solucion metodo find del prototipo Array
    const book:libro = books.find(element => element.title===titleToSearch);
    if(book) return book.isRead;
    return false;
}

console.log(libroLeido(libros, "Devastación")); // true
console.log(libroLeido(libros, "Canción de hielo y fuego")); // false
console.log(libroLeido(libros, "Los Pilares de la Tierra")); // false