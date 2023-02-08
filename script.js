// Array to hold books
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

/* Inserts a row and cells to table - iterating over array and displaying each book in page table */
function bookDisplay() {
  let rNum = myLibrary.length;
  let row = table.insertRow(rNum);
  let bk = row.insertCell(0);
  let writer = row.insertCell(1);
  let pgNum = row.insertCell(2);
  let rd = row.insertCell(3);
  let del = row.insertCell(4);

  for (let i = 0; i < myLibrary.length; i++) {
    rNum = rNum + i;
    bk.textContent = myLibrary[i].title;
    writer.textContent = myLibrary[i].author;
    pgNum.textContent = myLibrary[i].pages;
    rd.textContent = myLibrary[i].read;
    del.innerHTML = '<button type="button" class="del-btn">Remove</button>';
  }
}

// DOM element selection
const btnSubmit = document.querySelector('#btn-submit');
const addBtn = document.getElementById('add-btn');
const form = document.querySelector('form');
const table = document.querySelector('table');

// displays form when add book btn is clicked
addBtn.addEventListener('click', () => {
  form.style.display = 'flex';
});

// Event listener taking user input and adding it to table
btnSubmit.addEventListener('click', (event) => {
  event.preventDefault();
  let bkName = document.querySelector('#book-title').value;
  let bkAuthor = document.querySelector('#author').value;
  let bkPages = document.querySelector('#pages').value;
  let bkStatus = document.querySelector('input[name="status"]:checked').value;
  addBookToLibrary(bkName, bkAuthor, bkPages, bkStatus);

  // Clears input fields
  form.reset();

  // Hides form
  form.style.display = 'none';
});

// Listens for del btn for removal of tr
table.addEventListener('click', (event) => {
  // if target clicked don't have a class 'del-btn' ignore
  if (!event.target.classList.contains('del-btn')) {
    return;
  }
  // del the row that the del-btn is on
  const delBtn = event.target;
  delBtn.closest('tr').remove();
});

// used to test for bugs
addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, 'no');
addBookToLibrary('Cause!', 'Jackie & Kevin Freiberg', 195, 'no');
