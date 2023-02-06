const addBtn = document.getElementById('add-button');
const formDiv = document.getElementById('form-input');

// displays form when button is clicked
addBtn.addEventListener('click', () => {
  formDiv.style.display = 'block';
});

// Global var declarations
let myLibrary = [];

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
  let list = [];
  let name;
  for (let i = 0; i < myLibrary.length; i++) {
    name = myLibrary[i].title;
    list.push(name);
  }
  document.querySelector('body').append(list);
}

// Take values from form to add book
function getBook(nameA, nameB, num, bool) {
  let newBook = new Book(nameA, nameB, num, bool);
  addBookToLibrary(newBook);
}

getBook('The Hobbit', 'J.R.R. Tolkien', 295, 'No');
viewBooks();
