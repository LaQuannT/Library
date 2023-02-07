// local storage array
let myLibrary = [];

// defines a object that will be stored in array
class Book {
  // the constructor...
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

// Takes user input and add book to library
function addBookToLibrary(nameA, nameB, num, bool) {
  let newBook = new Book(nameA, nameB, num, bool);
  myLibrary.push(newBook);
  bookDisplay();
}

// Iterate over array on display each book in page table
function bookDisplay() {
  for (let i = 0; i < myLibrary.length; i++) {
    bk.textContent = myLibrary[i].title;
    writer.textContent = myLibrary[i].author;
    pgNum.textContent = myLibrary[i].pages;
    rd.textContent = myLibrary[i].read;
  }
}

// selectors for form input values
const bkName = document.getElementById('book-title').value;
const bkAuthor = document.getElementById('author').value;
const bkPages = document.getElementById('pages').value;
const submit = document.getElementById('submit');

// selectors to add to book table
const addBtn = document.getElementById('add-btn');
const form = document.querySelector('form');
const table = document.querySelector('table');
let row = table.insertRow(1);
let bk = row.insertCell(0);
let writer = row.insertCell(1);
let pgNum = row.insertCell(2);
let rd = row.insertCell(3);

// displays form when add book btn is clicked
addBtn.addEventListener('click', () => {
  form.style.display = 'flex';
});

//test  for bug in adding book to table - bug: book just replaces first book
addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, 'no');
addBookToLibrary('Cause!', 'Jackie & Kevin Freiberg', 195, 'no');
