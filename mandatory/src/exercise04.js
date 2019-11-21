/**
 * Exercise 04 - READ BOOKS
 */

const books = [
    {title: "Harry Potter y la piedra filosofal", isRead: true},
    {title: "Canción de hielo y fuego", isRead: false},
    {title: "Devastación", isRead: true},
    ];

function isBookRead(books, titleToSearch) {
    //Solucion bucle clasico
    // for(let i=0; i<books.length; i++){
    //      if(books[i].title===titleToSearch) return books[i].isRead;
    // }
    // return false;

    //Solucion metodo find del prototipo Array
    const book = books.find(element => element.title===titleToSearch);
    if(book) return book.isRead;
    return false;

}

console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false