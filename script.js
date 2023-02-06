// Global var declarations
let myLibrary = [];
let newBook;

// defines a object that will stored in array
class Book {
  // the constructor...
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

// Takes new object and adds to array
function addBookToLibrary(book) {
  // do stuff here
  myLibrary.push(book);
}

// Iterate over array on display each index
function viewBooks() {
  for (let i = 0; i < myLibrary.length; i++) {
    console.log(myLibrary[i].title);
  }
}

newBook = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not');
addBookToLibrary(newBook);

newBook = new Book('The Gold', 'Neil Forsyth', 320, 'not');
addBookToLibrary(newBook);

newBook = new Book('The Cat', 'James Tucker', 100, 'not');
addBookToLibrary(newBook);

console.table(myLibrary);
viewBooks();
