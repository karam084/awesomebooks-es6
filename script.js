'use strict';
const bookTitle = document.getElementById('bookTilte');
const bookAuthor = document.getElementById('bookAuthor');
const btnAdd = document.getElementById('Add');
const formControl = document.getElementsByClassName('form-control');
const list = document.getElementById('list');
const formid = document.getElementById('formcontrol');
const bookList = document.getElementById('tdBody');
const bookap = document.getElementById('bookApear');
const hiddBox = document.getElementsByClassName('hiddBox');

let books = [];
function displayData() {
  let bookList = '';
  for (let i = 0; i < books.length; i += 1) {
    bookList += `<div class="book">
   <div>
    <td>${books[i].title}     
      </td>
      <td> by </td>
      <td>
      ${books[i].author}</td></div>
      <div>
      <td><button onClick="deleteBook(${i})" class="remove">Remove</button>
      </td></div>
     </div>
     `;
  }
  document.getElementById('tdBody').innerHTML = bookList;
}
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  add() {
    const book = {
      title: bookTitle.value,
      author: bookAuthor.value,
    };
    books.push(book);
    localStorage.setItem('bookLists', JSON.stringify(books));
    return this.book;
  }

  deleteBook(index) {
    books.splice(index, 1);
    localStorage.setItem('bookLists', JSON.stringify(books));
    displayData();
    return this.book;
  }

  clearForm() {
    for (let i = 0; i < formControl.length; i += 1) {
      formControl[i].value = '';
    }
    //bookLists;
    return this.book;
  }
}

btnAdd.addEventListener('click', () => {
  const addBook = new Book('title', 'author');
  addBook.add();
  displayData();
});
function deleteBook() {
  const dBook = new Book();
  dBook.deleteBook();
}
if (JSON.parse(localStorage.getItem('bookLists')) != null) {
  books = JSON.parse(localStorage.getItem('bookLists'));
  displayData();
} else {
  deleteBook();
}
function clearForm() {
  const clearForms = new Book();
  clearForms.clearForm();
}
clearForm();

list.addEventListener('click', () => {
  hiddBox.style.display = 'flex';
  //formid.style.display = 'none';
});
