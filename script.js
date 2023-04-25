const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${title} by ${author}, ${pages} pages, ${read}`;
  };
}

function addBookToLibrary(book) {
  // display book
  myLibrary.push(book);
  const bookList = document.querySelector(".book-list");
  const bookItem = document.createElement("div");
  bookItem.innerText = book.info();
  bookList.appendChild(bookItem);

  // create a button to change read status
  const readStatusBtn = document.createElement("button");
  readStatusBtn.innerText = book.read;
  readStatusBtn.classList.add("read-status-btn");
  bookItem.appendChild(readStatusBtn);
  readStatusBtn.addEventListener("click", () => {
    console.log("read");
    if (book.read === "read") {
      book.read = "not read yet";
      readStatusBtn.innerText = book.read;
    } else {
      book.read = "read";
      readStatusBtn.innerText = book.read;
    }
  });

  // create a button to remove the book
  const deleteBookBtn = document.createElement("button");
  deleteBookBtn.innerText = "Delete";
  deleteBookBtn.classList.add("delete-book-btn");
  bookItem.appendChild(deleteBookBtn);
  deleteBookBtn.addEventListener("click", () => {
    console.log("delete");
    // Delete the parent element of the button when it's clicked
    deleteBookBtn.parentNode.remove();
  });
}

// add new book button
function togglePopup() {
  const form = document.querySelector(".popup");
  form.classList.toggle("hidden");
}

const addBookBtn = document.querySelector(".add-book-btn");
const cancelBtn = document.querySelector(".cancel-btn");
addBookBtn.addEventListener("click", togglePopup);
cancelBtn.addEventListener("click", togglePopup);

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet");
const theHobbit2 = new Book("The Hobbit2", "J.R.R222. ", 412, "read");
addBookToLibrary(theHobbit);
addBookToLibrary(theHobbit2);

// get user input from the form
const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", (event) => {
  event.preventDefault(); // prevent the default form submission behavior
  togglePopup();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = "read";
  const newBook = new Book(title, author, pages, read);
  console.log(newBook);
  myLibrary.push(newBook);
  addBookToLibrary(newBook);
});
