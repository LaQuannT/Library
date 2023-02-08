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
  bookDisplay(myLibrary);
}

/* Inserts a row and cells to table - iterating over array and displaying each book in page table */
function bookDisplay(array) {
  let rNum = array.length;
  let row = table.insertRow(rNum);
  let bk = row.insertCell(0);
  let writer = row.insertCell(1);
  let pgNum = row.insertCell(2);
  let rd = row.insertCell(3);
  let del = row.insertCell(4);

  for (let i = 0; i < rNum; i++) {
    bk.textContent = myLibrary[i].title;
    writer.textContent = myLibrary[i].author;
    pgNum.textContent = myLibrary[i].pages;
    rd.innerHTML = `<button type="button" class="stat-btn">
        ${myLibrary[i].read}
      </button>`;
    del.innerHTML = '<button type="button" class="del-btn">Remove</button>';
  }
}

// gets the index of the book
function bookNum(libraryArray, arg) {
  if (libraryArray.length <= 0) {
    return 0;
  }
  for (i of libraryArray) {
    if (i.title === arg) {
      return libraryArray.indexOf(i);
    }
  }
}

// updates the read status of book
function changeRead(i) {
  if (myLibrary[i].read === 'No') {
    myLibrary[i].read = 'Yes';
  } else if (myLibrary[i].read === 'Yes') {
    myLibrary[i].read = 'No';
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
  // if target clicked has class 'del-btn' remove table row
  if (event.target.classList.contains('del-btn')) {
    event.target.closest('tr').remove();
  } else if (event.target.classList.contains('stat-btn')) {
    let buffer = event.target.closest('tr');
    let nameArg = buffer.firstChild.innerHTML;
    changeRead(bookNum(myLibrary, nameArg));
  }
});

//used to test for bugs
addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, 'No');
addBookToLibrary('Cause!', 'Jackie & Kevin Freiberg', 195, 'No');

/* has a few bugs that need fixing*/
