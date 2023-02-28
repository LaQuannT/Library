const tbody = document.querySelector('tbody')
const form = document.querySelector('form')
const submitBtn = document.querySelector('#btn-submit')
const addBtn = document.getElementById('add-btn')

let myLibrary = []

// defines a object that will be stored in array
function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

// book function on prototype to change read status
Book.prototype.changeStatus = function () {
  this.read === 'No' ? (this.read = 'Yes') : (this.read = 'No')
}

// Takes user input and add book to library
function addBookToLibrary(name, writer, num, bool) {
  let book = new Book(name, writer, num, bool)
  myLibrary.push(book)
  displayBooks()
}

/* Inserts a row and cells to table - iterating over array and displaying each book on page table */
function displayBooks() {
  let row = tbody.insertRow(-1),
    bk = row.insertCell(0),
    writer = row.insertCell(1),
    pgNum = row.insertCell(2),
    stat = row.insertCell(3),
    del = row.insertCell(4),
    update = row.insertCell(5)

  myLibrary.forEach((book) => {
    bk.textContent = book.title
    writer.textContent = book.author
    pgNum.textContent = book.pages
    del.innerHTML = '<button type="button" class="del-btn">Remove</button>'
    update.innerHTML = '<button type="button" class="stat-btn">Update</button>'

    book.read === 'Yes'
      ? (stat.textContent = 'Read')
      : (stat.textContent = 'Not Read')
  })
}

// displays form when add book btn is clicked
addBtn.addEventListener('click', () => (form.style.display = 'flex'))

// Event listener taking user input and adding it to table
submitBtn.addEventListener('click', (event) => {
  event.preventDefault()
  let bkName = document.querySelector('#book-title').value,
    bkAuthor = document.querySelector('#author').value,
    bkPages = document.querySelector('#pages').value,
    bkStatus = document.querySelector('input[name="status"]:checked').value

  addBookToLibrary(bkName, bkAuthor, bkPages, bkStatus)

  // Clears input fields
  form.reset()

  // Hides form
  form.style.display = 'none'
})

// Listens for del btn for removal of tr
tbody.addEventListener('click', (event) => {
  let buffer = event.target.closest('tr'),
    nameArg = buffer.firstChild.innerHTML
  // if target clicked has class 'del-btn' remove table row
  if (event.target.classList.contains('del-btn')) {
    myLibrary.splice(bookNum(nameArg), 1)
    buffer.remove()
  }
  // if target is stat-btn updates read status
  else if (event.target.classList.contains('stat-btn')) {
    changeRead(bookNum(nameArg))
  }
})

// gets the index of the book
function bookNum(arg) {
  if (myLibrary.length <= 0) {
    return 0
  }
  for (i of myLibrary) {
    if (i.title === arg) {
      return myLibrary.indexOf(i)
    }
  }
}

// updates the read status of book
function changeRead(i) {
  myLibrary[i].changeStatus()
}

//used to test for bugs
addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, 'No')
addBookToLibrary('Cause!', 'Jackie & Kevin Freiberg', 195, 'Yes')

/* TODO -
  status of read needs to change on page when clicked (already changes in array)
  add counter functions amount of books, books read, and books to read
*/
